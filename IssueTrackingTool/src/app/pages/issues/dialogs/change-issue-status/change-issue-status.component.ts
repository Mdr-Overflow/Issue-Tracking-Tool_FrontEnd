import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Status } from 'src/app/models/status';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';
import { IssuesService } from 'src/app/services/issue/issues.service';

@Component({
  selector: 'app-change-issue-status',
  templateUrl: './change-issue-status.component.html',
  styleUrls: ['./change-issue-status.component.scss']
})
export class ChangeIssueStatusComponent implements OnInit {

  public formGroup: FormGroup;
  public statuses: Status[];
  constructor(
    private currentDulaogRef: MatDialogRef<ChangeIssueStatusComponent>,
    private issuesService: IssuesService,
    private handleService: ErrorHandlingServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.issuesService.getStatues().subscribe((result : any)=>{
      this.statuses = result;
    })
  }

  public createForm() {
    this.formGroup = new FormGroup({
      status: new FormControl('', Validators.required),
    });
  }

  public save() {
    var values = this.formGroup.getRawValue() as Status;
    this.currentDulaogRef.close({ values });
  }
  public cancel() {
    this.currentDulaogRef.close(null);
  }

  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }
}
