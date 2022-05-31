import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Group } from 'src/app/models/Group.1';
import { Issue } from 'src/app/models/issue';
import { Priority } from 'src/app/models/priority';
import { Status } from 'src/app/models/status';
import { User } from 'src/app/models/user';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';
import { GroupService } from 'src/app/services/group/group.service';
import { IssuesService } from 'src/app/services/issue/issues.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {
  public formGroup: FormGroup;
  public statuses: Status[];
  public priorities: Priority[];
  public users : User[];
  public userGroups : Group[];

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  constructor(
    private currentDulaogRef: MatDialogRef<AddIssueComponent>,
    private issuesService: IssuesService,
    private groupService: GroupService,
    private userService: UserService,
    private handleService: ErrorHandlingServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.issuesService.getStatues().subscribe((resul:any)=>{
      this.statuses = resul;
    });

    this.issuesService.getPriotities().subscribe((result:any)=>{
      this.priorities = result;
    });

    this.groupService.getGroups("").subscribe((result : any)=>{
      this.userGroups = result;
    });

    this.userService.getUsersWithNoGroup().subscribe((result: any)=>{
      this.users = result;
    });

  }

  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }


  public createForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      status: new FormControl('',Validators.required),
      details: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(512)] ),
      priority: new FormControl('',Validators.required),
      userGroups: new FormControl(''),
      users: new FormControl(''),
      dueDate: new FormControl('',Validators.required),
    });
  }

  public save() {
    var values = this.formGroup.getRawValue() as Issue;
    this.currentDulaogRef.close({values});
  }
  public cancel() {
    this.currentDulaogRef.close(null);
  }

}
