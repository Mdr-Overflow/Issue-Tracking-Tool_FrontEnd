import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Priority } from 'src/app/models/priority';
import { ErrorHandlingServiceService } from 'src/app/services/error-handling-service.service';
import { IssuesService } from 'src/app/services/issue/issues.service';

@Component({
  selector: 'app-change-issue-priority',
  templateUrl: './change-issue-priority.component.html',
  styleUrls: ['./change-issue-priority.component.scss']
})
export class ChangeIssuePriorityComponent implements OnInit {

  public formGroup: FormGroup;
  public priorites: Priority[];
  constructor(
    private currentDulaogRef: MatDialogRef<ChangeIssuePriorityComponent>,
    private issuesService: IssuesService,
    private handleService: ErrorHandlingServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.issuesService.getPriotities().subscribe((result : any)=>{
      this.priorites = result;
    })
  }

  public createForm() {
    this.formGroup = new FormGroup({
      priority: new FormControl('', Validators.required),
    });
  }

  public save() {
    var values = this.formGroup.getRawValue() as Priority;
    this.currentDulaogRef.close({ values });
  }
  public cancel() {
    this.currentDulaogRef.close(null);
  }

  public getFieldError(control: AbstractControl) {
    return this.handleService.validateError(control);
  }

}
