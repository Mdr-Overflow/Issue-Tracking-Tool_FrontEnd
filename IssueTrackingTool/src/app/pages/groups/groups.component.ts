import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, tap } from 'rxjs';
import { Group } from 'src/app/models/Group.1';
import { SeachTerm } from 'src/app/models/searchModel';
import { GroupService } from 'src/app/services/group/group.service';
import { SeeGroupUsersComponent } from './dialogs/see-group-users/see-group-users.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
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


  public getGroups(searchBy: string){
    this.groupService.getGroups(searchBy).subscribe((result: any)=>{
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
    })
  }

 public seeUsers(group: Group ){
   this.dialog.open(SeeGroupUsersComponent,{data: {group}})
 }
}
