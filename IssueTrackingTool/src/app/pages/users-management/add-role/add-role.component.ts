import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Role } from 'src/app/models/role';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {
  public formGroup: FormGroup;
  public roles: Role[];
  constructor(
    private currentDulaogRef: MatDialogRef<AddRoleComponent>,
    private rolesService: RolesService,
    private handleService: ErrorHandlingServiceService,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.rolesService.getAllRoles().subscribe((result : any)=>{
      this.roles = result;
    })
  }

  public createForm() {
    this.formGroup = new FormGroup({
      role: new FormControl('', Validators.required),
    });
  }

  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }


  public save() {
    var values = this.formGroup.getRawValue() as Role;
    this.currentDulaogRef.close({ values });
  }
  public cancel() {
    this.currentDulaogRef.close(null);
  }

}
