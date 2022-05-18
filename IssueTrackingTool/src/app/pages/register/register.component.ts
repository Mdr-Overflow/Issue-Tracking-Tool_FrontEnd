import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public formGroup: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }


  public login(){
    this.router.navigateByUrl('login');
  }

  public register(){
    this.router.navigateByUrl('base/admin');
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
      firstname: new FormControl("", Validators.required),
      lastname: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
    })
  }

}

