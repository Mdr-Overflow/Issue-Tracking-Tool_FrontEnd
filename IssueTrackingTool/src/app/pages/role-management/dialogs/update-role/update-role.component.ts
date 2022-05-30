import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Priviliges } from 'src/app/models/priviliges';
import { Role } from 'src/app/models/role';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss'],
})
export class UpdateRoleComponent implements OnInit {
  public formGroup: FormGroup;
  public privsList: Priviliges[] = [];
  constructor(
    private currentDulaogRef: MatDialogRef<UpdateRoleComponent>,
    private roleService: RolesService,
    @Inject(MAT_DIALOG_DATA) public input: any
  ) {}

  ngOnInit(): void {
    this.createForm();
    if(this.input){
      this.formGroup.patchValue(this.input);
    }

   // this.roleService.getPrivsOfRole().subscribe


    this.roleService.getPrivs().subscribe((result : any)=>{
      var role = this.input as Role;
      var selectedPrivs : any[] = [];
      this.privsList = result;

      console.log(
        this.input
      )
      if(this.input){
      role.privileges.forEach(privilige=>{
        this.privsList.forEach(r=>{
          if(r.name===privilige.name){
            {
              selectedPrivs.push(r);
              this.formGroup.controls['privileges'].setValue(selectedPrivs);
            }
          }
        })
      })
      }
    })


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
      name: new FormControl('', Validators.required),
      privileges: new FormControl('',Validators.required)
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
