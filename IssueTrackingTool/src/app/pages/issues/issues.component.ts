import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Group } from "src/app/models/Group.1";
import { Issue } from 'src/app/models/issue';
import { IssuesService } from 'src/app/services/issue/issues.service';
import { AddIssueComponent } from './dialogs/add-issue/add-issue.component';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
public toDoList: Issue[];
  constructor(private dialog: MatDialog,
    private issuesSerice: IssuesService) { }

  ngOnInit(): void {
  }

  public init(){
    var issue = new Issue();
    issue.id = 1;
    issue.details = " text text texttexttexttexttexttexttexttexttext text text text text ";
  }


  public create(){
    var dialogRef = this.dialog.open(AddIssueComponent);

    dialogRef.afterClosed().subscribe((result) => {

      this.issuesSerice.createIssue(result.values).subscribe(() => {
      //this.getRoles();
      });
  });
  }
}
