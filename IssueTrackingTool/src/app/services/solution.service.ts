import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../constants/expoints';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor(private http: HttpClient) { }

  public getSolutions(searchBy: string){
    var url = Endpoints.solutions + `/searchBy=${searchBy}`;

    return this.http.get(url);
  }
}
