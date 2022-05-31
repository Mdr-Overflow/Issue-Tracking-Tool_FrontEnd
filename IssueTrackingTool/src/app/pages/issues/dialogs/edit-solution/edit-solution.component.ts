import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solution } from 'src/app/models/solution';
import { Type } from 'src/app/models/type';
import { User } from 'src/app/models/user';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';
import { IssuesService } from 'src/app/services/issue/issues.service';
import { StorageService } from 'src/app/services/local-storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-edit-solution',
  templateUrl: './edit-solution.component.html',
  styleUrls: ['./edit-solution.component.scss'],
})
export class EditSolutionComponent implements OnInit {
  public formGroup: FormGroup;
  public types: Type[];
  public users: User[];
  public solution: Solution;
  constructor(
    private currentDulaogRef: MatDialogRef<EditSolutionComponent>,
    private issuesService: IssuesService,
    private userService: UserService,
    private storageService: StorageService,
    private handleService: ErrorHandlingServiceService,
    @Inject(MAT_DIALOG_DATA) public input: any,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.solution = this.input.solution as Solution;

    this.issuesService.getType().subscribe((resul: any) => {
      this.types = resul;
      this.types.forEach(type=>{
        if(type.name == this.solution.type.name){
          this.formGroup.controls['type'].setValue(type);
        }
      })
    });
    var selectedUsersList : any = [];
    this.userService.getAllUsers('').subscribe((result: any) => {
      this.users = result;
      this.users.forEach(user=>{
        this.solution.collaborators.forEach(u=>{
          if(u.username===user.username){
              selectedUsersList.push(user);
              this.formGroup.controls['collaborators'].setValue(selectedUsersList);
            }
        });
      })
    });
    if(this.solution.isAccepted){
      this.formGroup.controls['isAccepted'].patchValue(true);
    } else {
      this.formGroup.controls['isAccepted'].patchValue(false);
    }

    if(this.solution.isFinal){
      this.formGroup.controls['isFinal'].patchValue(true);
    } else {
      this.formGroup.controls['isFinal'].patchValue(false);
    }
    this.formGroup.patchValue(this.solution);
  }



  public createForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      content: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      description: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(512)]),
      isFinal: new FormControl('', Validators.required),
      isAccepted: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      collaborators: new FormControl('', Validators.required),
    });
  }

  public save() {
    var values = this.formGroup.getRawValue() as Solution;
    this.currentDulaogRef.close({ values });
  }
  public cancel() {
    this.currentDulaogRef.close(null);
  }


  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }

}
