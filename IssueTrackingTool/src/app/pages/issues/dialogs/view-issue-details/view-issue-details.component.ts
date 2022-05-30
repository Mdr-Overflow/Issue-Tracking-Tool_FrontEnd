import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-issue-details',
  templateUrl: './view-issue-details.component.html',
  styleUrls: ['./view-issue-details.component.scss']
})
export class ViewIssueDetailsComponent implements OnInit {

  constructor(private currentDulaogRef: MatDialogRef<ViewIssueDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public input: any) { }

  ngOnInit(): void {
  }

  public ok(){
    this.currentDulaogRef.close();
  }

}
