import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from 'src/app/models/role';
import { RolesService } from 'src/app/services/roles.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-component/confirm-component.component';
import {MatSort, Sort} from '@angular/material/sort';
import {MatSortModule} from '@angular/material/sort';
@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort()
  dataSource: MatTableDataSource<Role>;
  displayedColumns: string[] = ['id', 'name','options'];
  constructor(private roleService: RolesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.empTbSort;
    });
  }

  public deleteRole(role: Role) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: `Delete role: ${role.name} `,
        content: 'Are you sure you want to delete this role?',
        okButtonText: 'Delete',
        cancelButtonText: 'Cancel',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.roleService.deleteRole(role).subscribe((result)=>{
          console.log(result);
        });
      }
    });
  }

}
