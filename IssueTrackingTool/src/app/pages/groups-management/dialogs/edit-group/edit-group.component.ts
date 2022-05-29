import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from 'src/app/models/Group.1';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {
  public users: Array<User>;
  public formGroup: FormGroup;
  constructor(
    private currentDulaogRef: MatDialogRef<EditGroupComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public input: any
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.createForm();
    var group = this.input as Group;
    console.log(group);
    var selectedUsersList : User[] = [];
    this.createForm();
    this.userService.getAllUsers("").subscribe((result : any)=>{
      this.users = result;
      group.users.forEach(user=>{
        this.users.forEach(r=>{
          if(r.username===user.username){
            {
              selectedUsersList.push(r);
              this.formGroup.controls['users'].setValue(selectedUsersList);
            }
          }

          if(r.username == group.leader.username){
            this.formGroup.controls['leader'].setValue(r);
          }
        })
      })
    });
    this.formGroup.patchValue(this.input);
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
