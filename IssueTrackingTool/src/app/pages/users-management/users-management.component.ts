import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, tap } from 'rxjs';
import { SeachTerm } from 'src/app/models/searchModel';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-component/confirm-component.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = [
    'id',
    'username',
    'name',
    'email',
    'options',
  ];
  search = new SeachTerm();
  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers('');
    this.search.valueChanged
      .pipe(
        debounceTime(300),
        tap((f) => {
          this.getUsers(f.value);
        })
      )
      .subscribe();
  }

  public getUsers(searchValue: string) {
    this.userService.getAllUsers(searchValue).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result);
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
        this.userService.deleteUser(user).subscribe((result) => {
          console.log(result);
        });
      }
    });
  }

  public addRoleToUser(user: User) {
    var roles = user.roles
    const dialogRef = this.dialog.open(AddRoleComponent, {data: {roles} });
    
    //dialogRef._containerInstance._config.data={roles}


    dialogRef.afterClosed().subscribe((result) => {
      this.userService
        .addRoleToUser(user.username, result.values.role.name)
        .subscribe(() => {
          this.getUsers("");
        });
    });
  }

  public editUser(user: User) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {data: {user}});

    dialogRef.afterClosed().subscribe((result) => {
        this.userService.editUser(result.values,user.username).subscribe((result) => {
          this.getUsers("");
        });
    });
  }
}
