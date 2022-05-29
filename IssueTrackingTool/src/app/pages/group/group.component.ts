import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/models/authUser';
import { Group } from 'src/app/models/Group.1';
import { GroupService } from 'src/app/services/group/group.service';
import { StorageService } from 'src/app/services/local-storage/storage.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  authUser: AuthUser;
  group: Group;
  constructor(
    private groupSerice: GroupService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    var temp = this.storageService.getCurrentToken();
    if(temp){
      this.getGroup(temp);
    }
  }

  public getGroup(authUser: AuthUser){
    this.groupSerice.getGroupByUsername(authUser.username).subscribe((result : any)=>{
      this.group = result;
    })
  }
}
