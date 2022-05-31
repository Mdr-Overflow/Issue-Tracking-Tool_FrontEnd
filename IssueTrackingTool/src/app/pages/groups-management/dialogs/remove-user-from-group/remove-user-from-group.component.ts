import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from 'src/app/models/Group.1';
import { User } from 'src/app/models/user';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-remove-user-from-group',
  templateUrl: './remove-user-from-group.component.html',
  styleUrls: ['./remove-user-from-group.component.scss']
})
export class RemoveUserFromGroupComponent implements OnInit {

  public formGroup: FormGroup;
  public groupUsers: User[];
  constructor(
    private currentDulaogRef: MatDialogRef<RemoveUserFromGroupComponent>,
    private groupService: GroupService,
    private handleService: ErrorHandlingServiceService,
    @Inject(MAT_DIALOG_DATA) public input: any
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.groupService.getAllUsersForAGroup(this.input).subscribe((result : any)=>{
      this.groupUsers = result;
    })
  }

  public createForm() {
    this.formGroup = new FormGroup({
      user: new FormControl('', Validators.required),
    });
  }

  public save() {
    var values = this.formGroup.getRawValue() as User;
    this.currentDulaogRef.close({ values });
  }
  public cancel() {
    this.currentDulaogRef.close(null);
  }

  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }


}
