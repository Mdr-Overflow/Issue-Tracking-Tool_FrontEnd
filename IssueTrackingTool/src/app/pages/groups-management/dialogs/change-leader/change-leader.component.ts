import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';
import { GroupService } from 'src/app/services/group/group.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddUserToGroupComponent } from '../add-user-to-group/add-user-to-group.component';

@Component({
  selector: 'app-change-leader',
  templateUrl: './change-leader.component.html',
  styleUrls: ['./change-leader.component.scss']
})
export class ChangeLeaderComponent implements OnInit {


  public formGroup: FormGroup;
  public users: User[] = [];
  constructor(
    private currentDulaogRef: MatDialogRef<AddUserToGroupComponent>,
    private usersService: UserService,
    private handleService: ErrorHandlingServiceService,
    @Inject(MAT_DIALOG_DATA) public input: any
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.usersService.getAllUsers("").subscribe((result : any)=>{
      this.users = result;
        this.users = this.users.filter(user=>user.username !== this.input.leader.username)
    })

  }

  public createForm() {
    this.formGroup = new FormGroup({
      user: new FormControl('', Validators.required),
    });
  }

  public save() {
    var values = this.formGroup.getRawValue() as User;
    this.currentDulaogRef.close({ values });
  }
  public cancel() {
    this.currentDulaogRef.close(null);
  }

  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }


}
