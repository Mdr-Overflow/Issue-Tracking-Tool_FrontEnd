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
    var url = Endpoints.user + `/${username}`;

    return this.http.get<User>(url);
  }

  public changePassword(
    username: string,
    oldPass: string,
    newPass: string
  ) {
    var url = Endpoints.user + '/changePass';

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('newPass', newPass);
    body.set('oldPass', oldPass);

    this.http
      .put(url, body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .subscribe((result) => {});
  }
}
