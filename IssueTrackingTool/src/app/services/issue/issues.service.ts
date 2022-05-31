import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from 'src/app/constants/expoints';
import { Issue } from 'src/app/models/issue';
import { Solution } from 'src/app/models/solution';
import { User } from 'src/app/models/user';
import { StorageService } from '../local-storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  public getStatues() {
    var string = '';
    var url = Endpoints.statuses + `/searchBy=${string}`;

    return this.http.get(url);
  }

  public getPriotities() {
    var string = '';
    var url = Endpoints.priorities + `/getAll`;

    return this.http.get(url);
  }

  public createIssue(issue: Issue) {
    var url = Endpoints.issueSave;

    return this.http.post(url, issue);
  }

  public getIssues(username: string) {
    var url = Endpoints.issue + `/Username=${username}`;

    return this.http.get(url);
  }

  public editIssue(issue: Issue) {
    var url = Endpoints.issueEdit + `/${issue.name}`;

    return this.http.put(url, issue);
  }

  public editFullIssue(issue: Issue, oldUsername: string) {
    var url = Endpoints.issueEdit + `/${oldUsername}`;

    return this.http.put(url, issue);
  }

  public getType() {
    var url = Endpoints.types;

    return this.http.get(url);
  }

  public addSolution(solution: Solution, issue: Issue) {
    var url = Endpoints.solutionSave + `/${issue.name}`;
    solution.issueName = issue.name;
    return this.http.post(url, solution);
  }

  public getSolutions(issue: Issue) {
    var url = Endpoints.solutionsGet + `/${issue.name}`;

    return this.http.get(url);
  }

  public removeSolution(solution: Solution, issueName: string) {
    var url = Endpoints.solutionRemove + `/${issueName}/${solution.name}`;

    return this.http.delete(url);
  }

  public editSolution(solution: Solution, issue: Issue, oldSolutionName: string) {
    var url = Endpoints.solutionEdit + `/${issue.name}/${oldSolutionName}`;
    var temp = this.storageService.getCurrentUser();
    var user = new User();
    if (temp) {
      user.username = temp.username;
    }
    solution.owner = user;
    return this.http.put(url, solution);
  }
}
