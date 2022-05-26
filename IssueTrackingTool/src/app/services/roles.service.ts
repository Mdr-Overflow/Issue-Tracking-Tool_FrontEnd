import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../constants/expoints';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient ) { }

  public getAllRoles(){
    var url = Endpoints.role;

    return this.http.get(url);
  }

  public deleteRole(role: Role){
    var url = Endpoints.roleDelete + `/${role.name}`;

    return this.http.delete(url);
  }
}
