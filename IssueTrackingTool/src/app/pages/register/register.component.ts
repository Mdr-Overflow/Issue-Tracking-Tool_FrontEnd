import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public formGroup: FormGroup;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.createForm();
  }


  public login(){
    this.router.navigateByUrl('login');
  }

  public register(){
    var username = this.formGroup.controls['username'].value;
    var password = this.formGroup.controls['password'].value;
    var email = this.formGroup.controls['email'].value;
    var fullName = this.formGroup.controls['name'].value;
    this.loginService.register(username,password,email,fullName)
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

