import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private handleService: ErrorHandlingServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public login() {
    this.router.navigateByUrl('login');
  }

  public register() {
    var username = this.formGroup.controls['username'].value;
    var password = this.formGroup.controls['password'].value;
    var email = this.formGroup.controls['email'].value;
    var fullName = this.formGroup.controls['name'].value;
    this.loginService.register(username, password, email, fullName);
  }

  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }

  public createForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      password: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
      repeatPassword: new FormControl('',  [Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      email: new FormControl('', [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    });
  }
}
