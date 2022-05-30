import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthUser } from 'src/app/models/authUser';
import { Group } from 'src/app/models/Group.1';
import { Issue } from 'src/app/models/issue';
import { Priority } from 'src/app/models/priority';
import { Status } from 'src/app/models/status';
import { User } from 'src/app/models/user';
import { IssuesService } from 'src/app/services/issue/issues.service';
import { StorageService } from 'src/app/services/local-storage/storage.service';
import { AddIssueComponent } from './dialogs/add-issue/add-issue.component';
import { ChangeIssuePriorityComponent } from './dialogs/change-issue-priority/change-issue-priority.component';
import { ChangeIssueStatusComponent } from './dialogs/change-issue-status/change-issue-status.component';
import { EditIssueComponent } from './dialogs/edit-issue/edit-issue.component';
import { ViewIssueDetailsComponent } from './dialogs/view-issue-details/view-issue-details.component';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  public toDoList: Issue[] = [];
  public user: AuthUser;
  public issues: Issue[];
  public blocked: Issue[] = [];
  public inProgress: Issue[] = [];
  public inReview: Issue[] = [];
  public done: Issue[] = [];
  constructor(
    private dialog: MatDialog,
    private issuesSerice: IssuesService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    var temp = this.storageService.getCurrentUser();
    if (temp) {
      this.user = temp;
    }

    this.getIssues();
  }

  public getIssues(){
    this.done = [];
    this.inReview = [];
    this.inProgress = [];
    this.blocked = [];
    this.toDoList = [];
    this.issuesSerice.getIssues(this.user.username).subscribe((result: any) => {
      result.forEach((issue: Issue) => {
        if ((issue.status.name === 'TO DO')) {
          this.toDoList.push(issue);
        }
        if ((issue.status.name === 'IN PROGRESS')) {
          this.inProgress.push(issue);
        }
        if ((issue.status.name === 'IN REVIEW')) {
          this.inReview.push(issue);
        }
        if ((issue.status.name === 'BLOCKED')) {
          this.blocked.push(issue);
        }
        if ((issue.status.name === 'DONE')) {
          this.done.push(issue);
        }

      });
    });

  }
  public create() {
    var dialogRef = this.dialog.open(AddIssueComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.issuesSerice.createIssue(result.values).subscribe(() => {
        this.getIssues();
      });
    });
  }

  public viewDetails(issue: Issue){
    console.log(issue);
    this.dialog.open(ViewIssueDetailsComponent, {data:{issue}})
  }

  public changeStatus(issue: Issue){
   const dialogRef = this.dialog.open(ChangeIssueStatusComponent);

   dialogRef.afterClosed().subscribe((result: any)=>{
     issue.status = result.values;
     var newIssue = new Issue();
     issue.status = result.values;
     this.issuesSerice.editIssue(issue).subscribe((r)=>{
      this.getIssues();
     })
   })
  }

  public changePriority(issue: Issue){
    const dialogRef = this.dialog.open(ChangeIssuePriorityComponent);

    dialogRef.afterClosed().subscribe((result: any)=>{
      issue.priority = result.values;
      var newIssue = new Issue();
      issue.status = result.values;
      this.issuesSerice.editIssue(issue).subscribe((r)=>{
        this.getIssues();
      })
    })
  }

  public editIssue(issue: Issue){
    this.dialog.open(EditIssueComponent);
  }
}
