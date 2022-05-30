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

  public createRole(role: Role){
    var url = Endpoints.roleSave;

    return this.http.post(url,role);
  }

  public updateRole(role: Role, oldName: string){
    var url = Endpoints.roleUpdate + `/${oldName}`;

    return this.http.put<any>(url,role);
  }

  public getPrivs(){
    var url = Endpoints.privs;

    return this.http.get(url);
  }

  public getPrivsOfRole(roleName : string){
    var url = Endpoints.privsGET + `/${roleName}`;

    return this.http.get(url)
  }

}
