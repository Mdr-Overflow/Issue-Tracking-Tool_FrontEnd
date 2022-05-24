import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoints } from 'src/app/constants/expoints';
import { ApiKey } from 'src/app/models/apiKeys';
import { StorageService } from '../local-storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private localStorageService: StorageService,
    private router: Router
  ) {}

  public login(username: string, password: string) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    var url = Endpoints.login;
    this.http
      .post(url, body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .subscribe((result) => {
        var token = result as ApiKey;
        this.localStorageService.saveCurrentToken(token);
        this.router.navigate(['/base/profile']);
      },
      (error)=>{
        console.log(error);
      });
  }

  public getRefreshtoken(){
    var url = Endpoints.refresh;

    return this.http.get(url);
  }

  public register(
    username: string,
    password: string,
    email: string,
    firstname: string,
    surname: string
  ) {
    var url = Endpoints.login;
    this.http
      .post(url, null, {
        params: new HttpParams()
          .set('username', username)
          .set('password', password)
          .set('email', email)
          .set('firstname', firstname)
          .set('surname', surname),
      })
      .subscribe(() => {});
  }

  public logout(){
    this.localStorageService.removeCurrentTokenn();
    this.router.navigate(['/login']);
  }
}
