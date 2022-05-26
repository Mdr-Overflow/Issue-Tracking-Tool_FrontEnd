import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {
public formGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  public getFieldError(control: AbstractControl){
    const newLocal = control.errors;
    if(newLocal){
      if(newLocal['required'] === true){
        return "This field cannot be empty"
      }
    }
    return '';
  }

  public createForm(){
    this.formGroup = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      repeatPassword: new  FormControl("", Validators.required),
      name : new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
    })
  }

}
