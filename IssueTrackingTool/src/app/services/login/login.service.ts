import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/constants/expoints';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string){
    username="Will Smith";
    password="1234";
    var url = Endpoints.login;
    this.http.post(url,{username,password}).subscribe(()=>{});
  }

  public register(username: string, password:string,email:string,firstname:string,surname:string){
      var url = Endpoints.login;
      this.http.post(url, null, {
        params: new HttpParams()
          .set("username", username)
          .set("password", password)
          .set("email",email)
          .set("firstname",firstname)
          .set("surname",surname)
      }).subscribe(()=>{});
  }
}
