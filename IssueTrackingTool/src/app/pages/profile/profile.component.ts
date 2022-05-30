import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { GroupService } from 'src/app/services/group/group.service';
import { StorageService } from 'src/app/services/local-storage/storage.service';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-component/confirm-component.component';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
user: User;
  constructor(private localStorageService: StorageService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private loginService: LoginService,
    private groupService: GroupService) { }

  ngOnInit(): void {
    var apiUser = this.localStorageService.getCurrentToken();
    if(apiUser){
      this.userService.getUserByUsername(apiUser.username).subscribe((result)=>{
        this.user = result;
        this.groupService.getGroupByUsername(this.user.username).subscribe((r: any)=>{
          this.user.groupId = r.id;
          this.user.groupName = r.name;
        })
      })
    }
  }

  public goToChangePassword(){
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent);

    dialogRef.afterClosed().subscribe((result)=>{
      this.userService.changePassword(this.user.username,result.curent,result.newPassword);
    })
  }

  public logoutUser(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: "Logut", content: "Are you sure you want to logout?", okButtonText: "Logout" , cancelButtonText:"Cancel"}});

    dialogRef.afterClosed().subscribe((result)=>{
      if(result === true)
      {
        this.loginService.logout();
      }
    })
  }
}
