import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/constants/expoints';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUserByUsername(username: string) {
    var url = Endpoints.userGetById + `/${username}`;

    return this.http.get<User>(url);
  }

  public changePassword(
    username: string,
    oldPass: string,
    newPass: string
  ) {
    var url = Endpoints.userGetById + '/changePass';
    this.http
      .put(url, {username: username, newPass: newPass,oldPass: oldPass})
      .subscribe((result) => {});
  }

  public getAllUsers(searchValue: string){
    var url = Endpoints.user + `/searchBy=${searchValue}`;

    return this.http.get(url);
  }

  deleteUser(user: User) {
    var url = Endpoints.userDelete + `/${user.username}`;

    return this.http.delete(url);
  }

  public addRoleToUser(username : string , roleName: string){
    var url = Endpoints.roleToUser;

    return this.http.post(url,{roleName: roleName,username: username});
  }

  public editUser(user: User, oldUsername: string){
    var url =  Endpoints.userUpdate + `/${oldUsername}`;
     return this.http.put(url,user);
  }
}
