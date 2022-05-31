import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Group } from 'src/app/models/Group.1';
import { Priority } from 'src/app/models/priority';
import { Solution } from 'src/app/models/solution';
import { Status } from 'src/app/models/status';
import { Type } from 'src/app/models/type';
import { User } from 'src/app/models/user';
import { GroupService } from 'src/app/services/group/group.service';
import { IssuesService } from 'src/app/services/issue/issues.service';
import { StorageService } from 'src/app/services/local-storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-soution',
  templateUrl: './add-soution.component.html',
  styleUrls: ['./add-soution.component.scss']
})
export class AddSoutionComponent implements OnInit {
  public formGroup: FormGroup;
  public types: Type[];
  public users: User[];

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };
  constructor(
    private currentDulaogRef: MatDialogRef<AddSoutionComponent>,
    private issuesService: IssuesService,
    private userService: UserService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.issuesService.getType().subscribe((resul:any)=>{
      this.types = resul;
    });

    this.userService.getAllUsers("").subscribe((result: any)=>{
      this.users = result;
    });



  }

  public createForm() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required),
      type: new FormControl('', Validators.required),
      collaborators: new FormControl('',Validators.required),
    });
  }

  public save() {
    var values = this.formGroup.getRawValue() as Solution;
    this.currentDulaogRef.close({values});
  }
  public cancel() {
    this.currentDulaogRef.close(null);
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

}
