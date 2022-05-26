import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group/group.service';

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

  constructor(private gourpService: GroupService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  public getGroups(){
    this.gourpService.getGroups().subscribe((result: any)=>{
      this.dataSource = new MatTableDataSource(result.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
    })
  }

}
