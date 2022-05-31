import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/constants/expoints';
import { Issue } from 'src/app/models/issue';
import { Solution } from 'src/app/models/solution';

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

  public getIssues(username: string){
    var url = Endpoints.issue + `/Username=${username}`;

    return this.http.get(url);
  }

  public editIssue(issue: Issue){
    var url =  Endpoints.issueEdit + `/${issue.name}`;

    return this.http.put(url,issue);
  }

  public editFullIssue(issue: Issue, oldUsername: string){
    var url =  Endpoints.issueEdit + `/${oldUsername}`;

    return this.http.put(url,issue);
  }

  public getType(){
    var url = Endpoints.types;

    return this.http.get(url);
  }

  public addSolution(solution: Solution, issue: Issue){
    var url = Endpoints.solutionSave + `/${issue.name}`;

    return this.http.post(url,solution);
  }
}
