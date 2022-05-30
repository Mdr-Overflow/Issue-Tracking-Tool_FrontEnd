import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, tap } from 'rxjs';
import { Group } from "src/app/models/Group.1";
import { SeachTerm } from 'src/app/models/searchModel';
import { GroupService } from 'src/app/services/group/group.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-component/confirm-component.component';
import { AddGroupDialogComponent } from './dialogs/add-group-dialog/add-group-dialog.component';
import { AddUserToGroupComponent } from './dialogs/add-user-to-group/add-user-to-group.component';
import { ChangeLeaderComponent } from './dialogs/change-leader/change-leader.component';
import { EditGroupComponent } from './dialogs/edit-group/edit-group.component';
import { RemoveUserFromGroupComponent } from './dialogs/remove-user-from-group/remove-user-from-group.component';

@Component({
  selector: 'app-groups-management',
  templateUrl: './groups-management.component.html',
  styleUrls: ['./groups-management.component.scss']
})
export class GroupsManagementComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort()
  dataSource: MatTableDataSource<Group>;
  displayedColumns: string[] = ['id', 'name', 'leader', 'users', 'options'];
  search = new SeachTerm();

  constructor(private groupService: GroupService,private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.getGroups("");
    this.search.valueChanged
      .pipe(
        debounceTime(300),
        tap((f) => {
          this.getGroups(f.value);
        })
      )
      .subscribe();
  }

  public create(){
    const dialogRef =this.dialog.open(AddGroupDialogComponent);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result.name){
        this.groupService.createGroup(result).subscribe(()=>{
          this.getGroups("");
        })
      }
    })
  }

  public getGroups(searchBy: string){
    this.groupService.getGroups(searchBy).subscribe((result: any)=>{
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
    })
  }

  public deleteGroup(group: Group) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `Delete group: ${group.name} `,
        content: 'Are you sure you want to delete this group?',
        okButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.groupService.deleteGroup(group).subscribe((result) => {
          this.getGroups("");
        });
      }
    });
  }

  public removeAUser(group: Group) {
    const dialogRef = this.dialog.open(RemoveUserFromGroupComponent, { data: group});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
        this.groupService.removeUserFromGroup(group,result.values.user).subscribe(() => {
          this.getGroups("");
        });
    });
  }

  public addUserToGroup(group: Group) {
    const dialogRef = this.dialog.open(AddUserToGroupComponent, { data: group});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
        this.groupService.addUserToGroup(group,result.values.user).subscribe(() => {
          this.getGroups("")
        });
    });
  }

  public changeLeader(group: Group) {
    const dialogRef = this.dialog.open(ChangeLeaderComponent, { data: group});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
        this.groupService.changeLeader(group,result.values.user).subscribe(() => {
          this.getGroups("")
        });
    });
  }

  public editGroup(group: Group) {
    const dialogRef = this.dialog.open(EditGroupComponent, { data: group});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
        this.groupService.editGroup(result,group.name).subscribe(() => {
          this.getGroups("")
        });
    });
  }

}
