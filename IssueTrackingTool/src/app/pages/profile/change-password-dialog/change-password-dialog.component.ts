import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss'],
})
export class ChangePasswordDialogComponent implements OnInit {
  changePassFormGoup: FormGroup;
  constructor(
    private currentDulaogRef: MatDialogRef<ChangePasswordDialogComponent>
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.changePassFormGoup = new FormGroup({
      current: new FormControl('', [Validators.required]),
      newPass: new FormControl('', [Validators.required]),
      repeatPass: new FormControl('', [Validators.required]),
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
