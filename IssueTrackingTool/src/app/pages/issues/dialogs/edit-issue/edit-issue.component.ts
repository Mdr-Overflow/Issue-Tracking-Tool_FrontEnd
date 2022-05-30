import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from 'src/app/models/Group.1';
import { Issue } from 'src/app/models/issue';
import { Priority } from 'src/app/models/priority';
import { Status } from 'src/app/models/status';
import { User } from 'src/app/models/user';
import { GroupService } from 'src/app/services/group/group.service';
import { IssuesService } from 'src/app/services/issue/issues.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss']
})
export class EditIssueComponent implements OnInit {

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
    private currentDulaogRef: MatDialogRef<EditIssueComponent>,
    private issuesService: IssuesService,
    private groupService: GroupService,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public input: any
  ) {}

  ngOnInit(): void {
    this.createForm();
    var issue = this.input.issue;
    this.formGroup.patchValue(issue);
    this.issuesService.getStatues().subscribe((resul:any)=>{
      this.statuses = resul;
      this.statuses.forEach(status =>{
        if(status.name === issue.status.name){
          this.formGroup.controls['status'].patchValue(status);
        }
      })
    });

    this.issuesService.getPriotities().subscribe((result:any)=>{
      this.priorities = result;

      this.priorities.forEach(priority =>{
        if(priority.name === issue.priority.name){
          this.formGroup.controls['priority'].patchValue(priority);
        }
      })
    });

    this.groupService.getGroups("").subscribe((result : any)=>{
      this.userGroups = result;
      var selectedGroups : any = [];
      this.userGroups.forEach(group=>{
        issue.userGroups.forEach( (g: any) =>{
          if(g.name === group.name){
            selectedGroups.push(group);
            this.formGroup.controls['userGroups'].patchValue(selectedGroups);
          }
        })
      })
    });

    this.userService.getUsersWithNoGroup().subscribe((result: any)=>{
      this.users = result;

      var selectedUsers : any = [];
      this.users.forEach(user=>{
        issue.users.forEach( (u: any) =>{
          if(u.username === user.username){
            selectedUsers.push(user);
            this.formGroup.controls['users'].patchValue(selectedUsers);
          }
        })
      })
    });

  }

  public getFieldError(control: AbstractControl) {
    const newLocal = control.errors;
    if (newLocal) {
      if (newLocal['required'] === true) {
        return 'This field cannot be empty';
      }
    }
    return '';
  }

  public createForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      status: new FormControl('',Validators.required),
      details: new FormControl('',Validators.required),
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
