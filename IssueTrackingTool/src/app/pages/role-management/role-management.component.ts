import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from 'src/app/models/role';
import { RolesService } from 'src/app/services/roles.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-component/confirm-component.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { UpdateRoleComponent } from './dialogs/update-role/update-role.component';
@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss'],
})
export class RoleManagementComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  dataSource: MatTableDataSource<Role>;
  displayedColumns: string[] = ['id', 'name', 'options'];
  constructor(private roleService: RolesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getRoles();
  }

  public getRoles() {
    this.roleService.getAllRoles().subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result);
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
        this.roleService.deleteRole(role).subscribe((result) => {
          this.getRoles();
        });
      }
    });
  }

  public create() {
    const dialogRef = this.dialog.open(UpdateRoleComponent);
    dialogRef.afterClosed().subscribe((result) => {
        this.roleService.createRole(result.values).subscribe(() => {
          this.getRoles();
        });
    });
  }

  public edit(role: Role) {
    const dialogRef = this.dialog.open(UpdateRoleComponent, { data: role});
    dialogRef.afterClosed().subscribe((result) => {
        this.roleService.updateRole(result.values,role.name).subscribe(() => {
          this.getRoles();
        });
    });
  }
}
