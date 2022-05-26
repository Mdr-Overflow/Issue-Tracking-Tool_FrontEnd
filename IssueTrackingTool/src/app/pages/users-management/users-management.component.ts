import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-component/confirm-component.component';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort()
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['id', 'username', 'name', 'email', 'options'];
  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
    });
  }


  public deleteUser(user: User) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `Delete user: ${user.username} `,
        content: 'Are you sure you want to delete this user?',
        okButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.userService.deleteUser(user).subscribe((result)=>{
          console.log(result);
        });
      }
    });
  }
}
