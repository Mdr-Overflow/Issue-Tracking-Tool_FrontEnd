import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-component',
  templateUrl: './confirm-component.component.html',
  styleUrls: ['./confirm-component.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public input: any,
  private currentDulaogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

  public close(){
    this.currentDulaogRef.close(false);
  }

  public save(){
    this.currentDulaogRef.close(true);
  }

}
