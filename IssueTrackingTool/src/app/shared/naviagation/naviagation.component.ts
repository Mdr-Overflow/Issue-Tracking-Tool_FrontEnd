import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naviagation',
  templateUrl: './naviagation.component.html',
  styleUrls: ['./naviagation.component.scss']
})
export class NavigationComponent implements OnInit {
  list : any =[];
  public constructor(private router: Router) { }

  public ngOnInit(): void {
  this.list.push({text:"Admin",path:"admin/manageUsers"});
  this.list.push({text:"Issues",path:"issues"});
  this.list.push({text:"Group",path:"group"});
  this.list.push({text:"Profile",path:"profile"});
  this.list.push({text:"Feedback",path:"feedback"});
  }

}
