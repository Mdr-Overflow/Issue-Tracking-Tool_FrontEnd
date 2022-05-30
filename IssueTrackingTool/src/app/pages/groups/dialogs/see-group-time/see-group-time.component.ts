import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-see-group-time',
  templateUrl: './see-group-time.component.html',
  styleUrls: ['./see-group-time.component.scss']
})
export class SeeGroupTimeComponent implements OnInit {
  users: User[];
  time: Date;
  constructor(private currentDulaogRef: MatDialogRef<SeeGroupTimeComponent>,
    @Inject(MAT_DIALOG_DATA) public input: any,
    private groupService: GroupService) { }

  ngOnInit(): void {
    this.users = this.input.group.users;

    this.groupService.getGroupTime(this.input.group).subscribe((result:any)=>{
      this.time = result;
    })
  }

  public ok(){
    this.currentDulaogRef.close();
  }
}
