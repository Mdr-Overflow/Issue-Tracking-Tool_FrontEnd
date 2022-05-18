import { Component, OnInit } from '@angular/core';
import { UserGroup } from 'src/app/models/group';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
public toDoList: Issue[];
  constructor() { }

  ngOnInit(): void {
  }

  public init(){
    var issue = new Issue();
    issue.id = 1;
    issue.details = " text text texttexttexttexttexttexttexttexttext text text text text ";
  }

}
