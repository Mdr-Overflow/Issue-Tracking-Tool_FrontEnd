import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  list: any = [];
  public constructor(private router: Router) { }

  ngOnInit(): void {
  this.list.push({text:"Manage Groups",path:"manageGroups"});
  this.list.push({text:"Manage Users",path:"manageUsers"});
  this.list.push({text:"Manage Issue", path:"manageIssues"});
  }

}
