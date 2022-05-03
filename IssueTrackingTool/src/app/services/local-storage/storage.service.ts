import { Injectable } from '@angular/core';
import { ApiKey } from 'src/app/models/apiKeys';

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

  public getCurrentToken(){
    const temp = localStorage.getItem("USER_TOKEN");
    if(temp!=null)
      {
        var apiKey = JSON.parse(temp) as ApiKey;
        return apiKey;
      }
      return null;
  }
}
