import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formGroup: FormGroup;

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(){
    this.formGroup = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  public login(){
    var object = this.formGroup.getRawValue();
    this.loginService.login(object.username, object.password);
  }
  public register(){
    this.router.navigate(['/register']);
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
}
