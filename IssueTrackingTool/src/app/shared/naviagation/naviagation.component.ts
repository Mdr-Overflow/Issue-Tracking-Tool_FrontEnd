import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/local-storage/storage.service';

@Component({
  selector: 'app-naviagation',
  templateUrl: './naviagation.component.html',
  styleUrls: ['./naviagation.component.scss'],
})
export class NavigationComponent implements OnInit {
  list: any = [];
  public constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  public ngOnInit(): void {
    this.getAdminLinks();
    this.list.push({ text: 'Issues', path: 'issues' });
    this.list.push({ text: 'Groups', path: 'allGroups' });
    this.list.push({ text: 'Profile', path: 'profile' });
    this.list.push({ text: 'Feedback', path: 'feedback' });
  }

  public getAdminLinks() {
    var temp = this.storageService.getCurrentUser();
    if (temp != null) {
      temp.roles.forEach((role) => {
        if (role === 'ROLE_ADMIN' || role == 'ROLE_SUPER_ADMIN') {
          this.list.push({ text: 'ADMIN', path: 'admin' });
          return true;
        } else {
          return true;
        }
      });
    }
    return true;
  }
}
