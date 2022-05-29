import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss'],
})
export class UpdateRoleComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    private currentDulaogRef: MatDialogRef<UpdateRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public input: any
  ) {}

  ngOnInit(): void {
    this.createForm();
    if(this.input){
      this.formGroup.patchValue(this.input);
    }
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
      name: new FormControl('', Validators.required)
    });
  }

  public save() {
    var values = this.formGroup.getRawValue() as Role;
    this.currentDulaogRef.close({values});
  }
  public cancel() {
    this.currentDulaogRef.close(null);
  }
}
