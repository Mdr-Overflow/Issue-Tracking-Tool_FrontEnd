import { Injectable } from '@angular/core';
import { ApiKey } from 'src/app/models/apiKeys';
import jwtDecode from "jwt-decode";
import { AuthUser } from 'src/app/models/authUser';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public removeCurrentTokenn(){
    localStorage.removeItem("USER_TOKEN");
  }

  public saveCurrentToken(apiKey: ApiKey){
    localStorage.removeItem("USER_TOKEN");
    localStorage.setItem("USER_TOKEN",JSON.stringify(apiKey));
  }

  public getCurrentUser(){
    const temp = localStorage.getItem("USER_TOKEN");
    if(temp!=null)
      {
        var apiKey = JSON.parse(temp) as ApiKey;
        var decoded = jwtDecode(apiKey.access_token) as any;
        var currentUser = new AuthUser();
        currentUser.username = decoded.sub;
        currentUser.roles = decoded.roles;

        return currentUser;
      }
      return null;
  }

  public getAuthorizationToken(){
    const temp = localStorage.getItem("USER_TOKEN");
    if(temp!=null){
      var apiKey = JSON.parse(temp) as ApiKey;

      return "Bearer " + apiKey.access_token;
    }

    return '';
  }

  public getRefreshToken(){
    const temp = localStorage.getItem("USER_TOKEN");
    if(temp!=null){
      var apiKey = JSON.parse(temp) as ApiKey;

      return "Bearer " + apiKey.refresh_token;
    }

    return '';
  }

}
