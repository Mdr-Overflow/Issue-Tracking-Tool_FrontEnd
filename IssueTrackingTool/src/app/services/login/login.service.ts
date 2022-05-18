import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    var url = Endpoints.login;
    this.http.post(url,body.toString(),{headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}).subscribe((result)=>{console.log(result)});
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
