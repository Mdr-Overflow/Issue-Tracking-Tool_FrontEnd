import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {
public formGroup: FormGroup;
public roles: Role[];
  constructor( private currentDulaogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public input: any,
    private rolesService: RolesService) { }

  ngOnInit(): void {
    var user = this.input.user as User;
    var selectedRolesList : Role[] = [];
    this.createForm();
    this.rolesService.getAllRoles().subscribe((result : any)=>{
      this.roles = result.content;
      user.roles.forEach(role=>{
        this.roles.forEach(r=>{
          if(r.name===role.name){
            {
              selectedRolesList.push(r);
              this.formGroup.controls['roles'].setValue(selectedRolesList);
            }
          }
        })
      })
    });

    this.formGroup.patchValue(this.input.user);
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
      name : new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      roles: new FormControl("", [Validators.required]),
    })
  }

  public save() {
    var values = this.formGroup.getRawValue() as User;
    this.currentDulaogRef.close({ values });
  }
  public cancel() {
    this.currentDulaogRef.close(null);
  }

}
