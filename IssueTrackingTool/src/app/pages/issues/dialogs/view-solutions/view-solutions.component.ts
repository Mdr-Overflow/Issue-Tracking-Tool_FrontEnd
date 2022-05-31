import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Issue } from 'src/app/models/issue';
import { Solution } from 'src/app/models/solution';
import { IssuesService } from 'src/app/services/issue/issues.service';
import { StorageService } from 'src/app/services/local-storage/storage.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-component/confirm-component.component';
import { EditSolutionComponent } from '../edit-solution/edit-solution.component';

@Component({
  selector: 'app-view-solutions',
  templateUrl: './view-solutions.component.html',
  styleUrls: ['./view-solutions.component.scss']
})
export class ViewSolutionsComponent implements OnInit {

  public formGroup: FormGroup;
  public solutions: Solution[];
  public issue: Issue;
  public solution: Solution;
  constructor(
    private currentDulaogRef: MatDialogRef<ViewSolutionsComponent>,
    private issuesService: IssuesService,
    @Inject(MAT_DIALOG_DATA) public input: any,
    private dialog: MatDialog,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.issue = this.input.issue;
    this.createForm();
    this.getSols();
  }

  public getSols(){
    this.solution = new Solution();
    this.issuesService.getSolutions(this.issue).subscribe((result : any)=>{
      this.solutions = result;
    })
  }

  public createForm() {
    this.formGroup = new FormGroup({
      solutions: new FormControl('', Validators.required),
    });
  }

  public ok() {
    this.currentDulaogRef.close(null);
  }

  public select(solution: Solution){
    this.solution = solution;
  }

  public delete(solution: Solution){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `Delete user: ${solution.name} `,
        content: 'Are you sure you want to delete this solution?',
        okButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      },
    });

    dialogRef.afterClosed().subscribe((result)=>{
      if(result === true){
         this.issuesService.removeSolution(solution,this.issue.name).subscribe(()=>{
           this.getSols();
         })
      }
    })
  }
  public edit(solution: Solution){
    const dialogRef = this.dialog.open(EditSolutionComponent, {data:{solution}});
    dialogRef.afterClosed().subscribe((result)=>{
         this.issuesService.editSolution(result.values,this.issue,solution.name).subscribe((result)=>{
           if(result){
            this.getSols();
           }
         })

    })
  }

}
