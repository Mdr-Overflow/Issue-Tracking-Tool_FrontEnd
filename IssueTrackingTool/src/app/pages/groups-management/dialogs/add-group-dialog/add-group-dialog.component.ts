import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Group } from "src/app/models/Group.1";
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.scss'],
})
export class AddGroupDialogComponent implements OnInit {
  public users: Array<User>;
  public formGroup: FormGroup;
  constructor(
    private currentDulaogRef: MatDialogRef<AddGroupDialogComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.createForm();
  }

  public getUsers() {
    this.userService.getAllUsers("").subscribe((result: any) => {
      this.users = result;
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
      leader: new FormControl('', Validators.required),
      users: new FormControl('', Validators.required),
    });
  }

  public save() {
    var values = this.formGroup.getRawValue() as Group;
    var group = new Group();
    group.name = values.name;
    group.leader = new User();
    group.leader.username =  values.leader.username;
    group.users = [];
    values.users.forEach(user=>{
      var newUser = new User();
      newUser.username = user.username;
      group.users.push(newUser);
    })
    this.currentDulaogRef.close(group);
  }
  public cancel(){
    this.currentDulaogRef.close(null)
  }
}
