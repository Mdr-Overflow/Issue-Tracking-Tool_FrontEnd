import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  public login(){
    this.router.navigateByUrl('login');
  }

  public register(){
    this.router.navigateByUrl('base/admin');
  }
}

