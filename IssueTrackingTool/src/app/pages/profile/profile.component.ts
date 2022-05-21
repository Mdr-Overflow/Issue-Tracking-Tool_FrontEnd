import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/local-storage/storage.service';
import { UserService } from 'src/app/services/user/user.service';
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
    private dialog: MatDialog) { }

  ngOnInit(): void {
    var apiUser = this.localStorageService.getCurrentToken();
    if(apiUser){
      this.userService.getUserByUsername(apiUser.username).subscribe((result)=>{
        this.user = result;

      })
    }
  }

  public goToChangePassword(){
    const dialogRef = this.dialog.open(ChangePasswordDialogComponent);

    dialogRef.afterClosed().subscribe((result)=>{
      this.userService.changePassword(this.user.username,result.curent,result.newPassword);
    })
  }

}
