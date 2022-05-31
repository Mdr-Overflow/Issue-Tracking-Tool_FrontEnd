import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-component/confirm-component.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingServiceService {
  constructor(private dialog: MatDialog) {}

  public handleError() {
    this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: `Error `,
          content: 'Are you sure you want to delete this group?',
          okButtonText: 'Ok',
        },
    });
  }

  public validateError(control: AbstractControl){
    const newLocal = control.errors;
    console.log(newLocal);
    if (newLocal) {
      if (newLocal['required'] === true) {
        return 'This field cannot be empty';
      }

      if (newLocal['maxlength']?.requiredLength < newLocal['maxlength']?.actualLength ) {
        return 'This field should be shorter';
      }

      if (newLocal['minlength']?.requiredLength > newLocal['minlength']?.actualLength ) {
        return 'This field is too short';
      }

      if (newLocal['pattern']) {
        return 'The email entered is incorrect';
      }
    }
    return '';
  }
}
