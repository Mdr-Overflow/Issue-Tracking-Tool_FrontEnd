import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/constants/expoints';
import { Group } from "src/app/models/Group.1";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  public getGroups(searchBy: string){
    var url = Endpoints.group + `/searchBy=${searchBy}`;

    return this.http.get(url);
  }

  public createGroup(group: Group){
    var url = Endpoints.groupSave;

    return this.http.post(url,group);
  }
}
