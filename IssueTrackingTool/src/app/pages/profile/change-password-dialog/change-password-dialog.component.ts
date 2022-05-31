import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss'],
})
export class ChangePasswordDialogComponent implements OnInit {
  changePassFormGoup: FormGroup;
  constructor(
    private currentDulaogRef: MatDialogRef<ChangePasswordDialogComponent>,
    private handleService: ErrorHandlingServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.changePassFormGoup = new FormGroup({
      current: new FormControl('', [Validators.required]),
      newPass: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]),
      repeatPass: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(12)]),
    });
  }

  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }


  public closeDialog() {
    this.currentDulaogRef.close(null);
  }

  public checkIfReadyToSave() {
    if (
      this.changePassFormGoup.controls['current'].errors?.['required'] ||
      this.changePassFormGoup.controls['newPass'].errors?.['required'] ||
      this.changePassFormGoup.controls['repeatPass'].errors?.['required'] ||
      this.changePassFormGoup.controls['repeatPass'].value != this.changePassFormGoup.controls['newPass'].value
    ) {
      return true
    }
    return false;
  }

  public submitPasswordChange(){
    this.currentDulaogRef.close({curent: this.changePassFormGoup.controls['current'].value, newPassword: this.changePassFormGoup.controls['newPass'].value});
  }
}
