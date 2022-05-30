import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/constants/expoints';
import { Issue } from 'src/app/models/issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http: HttpClient) { }

  public getStatues(){
    var string = "";
    var url = Endpoints.statuses + `/searchBy=${string}`;

    return this.http.get(url);
  }

  public getPriotities(){
    var string = "";
    var url = Endpoints.priorities + `/getAll`;

    return this.http.get(url);
  }

  public createIssue(issue: Issue){
    var url = Endpoints.issueSave;

    return this.http.post(url,issue)
  }
}
