import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/constants/expoints';
import { Group } from "src/app/models/Group.1";
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  removeUserFromGroup(group: Group, user: User) {
    var url =  Endpoints.groupDeleteUser + `/${group.name}/${user.name}`;
    return this.http.delete(url);
  }
  getAllUsersForAGroup(group: Group) {
    var url = Endpoints.groupUsers + `/${group.name}`;

    return this.http.get(url);
  }

  deleteGroup(group: Group) {
   var url = Endpoints.groupDelete + `/${group.name}`;

   return this.http.delete(url);
  }

  constructor(private http: HttpClient) { }

  public getGroups(searchBy: string){
    var url = Endpoints.group + `/searchBy=${searchBy}`;

    return this.http.get(url);
  }

  public createGroup(group: Group){
    var url = Endpoints.groupSave;

    return this.http.post(url,group);
  }

  public addUserToGroup(group:Group,user: User){
    var url = Endpoints.groupAddUser +`/${group.name}` ;

    return this.http.put(url,{username: user.username});
  }

  public changeLeader(group: Group, user: User)
  {
    var url = Endpoints.groupLeaderChange + `/${group.name}`;

    return this.http.put(url,user);
  }

  public editGroup(group: Group, oldName: string){
    var url = Endpoints.groupUpdate + `/${oldName}`;

    return this.http.put(url, group);
  }

  public getGroupByUsername(username: string){
    var url = Endpoints.groupGetByUsername + `/${username}`;

    return this.http.get(url);
  }
}
