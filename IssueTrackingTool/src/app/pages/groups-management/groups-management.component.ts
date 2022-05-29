import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Group } from "src/app/models/Group.1";
import { GroupService } from 'src/app/services/group/group.service';
import { AddGroupDialogComponent } from './dialogs/add-group-dialog/add-group-dialog.component';

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

  constructor(private gourpService: GroupService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getGroups("");
  }

  public create(){
    const dialogRef =this.dialog.open(AddGroupDialogComponent);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result.name){
        this.gourpService.createGroup(result).subscribe(()=>{
          this.getGroups("");
        })
      }
    })
  }

  public getGroups(searchBy: string){
    this.gourpService.getGroups(searchBy).subscribe((result: any)=>{
      this.dataSource = new MatTableDataSource(result.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
    })
  }

}
