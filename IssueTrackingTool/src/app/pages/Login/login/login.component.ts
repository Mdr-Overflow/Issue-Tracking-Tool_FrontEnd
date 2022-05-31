import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';

import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formGroup: FormGroup;

  constructor(private router: Router,
    private loginService: LoginService,
    private handleService: ErrorHandlingServiceService) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(){
    this.formGroup = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      password: new FormControl("", [Validators.required, Validators.minLength(3),Validators.maxLength(12)])
    })
  }

  public login(){
    var object = this.formGroup.getRawValue();
    this.loginService.login(object.username, object.password);
  }
  public register(){
    this.router.navigate(['/register']);
  }

  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }

}
