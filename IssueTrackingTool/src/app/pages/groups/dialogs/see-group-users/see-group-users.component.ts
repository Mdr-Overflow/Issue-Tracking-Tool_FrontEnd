import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-see-group-users',
  templateUrl: './see-group-users.component.html',
  styleUrls: ['./see-group-users.component.scss']
})
export class SeeGroupUsersComponent implements OnInit {
users: User[];
  constructor(private currentDulaogRef: MatDialogRef<SeeGroupUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public input: any) { }

  ngOnInit(): void {
    this.users = this.input.group.users;
    console.log(this.input)
  }

  public ok(){
    this.currentDulaogRef.close();
  }
}
