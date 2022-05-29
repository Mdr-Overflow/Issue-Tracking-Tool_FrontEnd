import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import * as core from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BasePlatformComponent } from "./base-platform/base-platform.component";
import { RequestsInterceptor } from "./interceptors/requests.interceptor";
import { ApiKey } from "./models/apiKeys";
import { AdminComponent } from "./pages/admin/admin.component";
import { FeedbackComponent } from "./pages/feedback/feedback.component";
import { GroupComponent } from "./pages/group/group.component";
import { GroupsManagementComponent } from "./pages/groups-management/groups-management.component";
import { IssuesManagementComponent } from "./pages/issues-management/issues-management.component";
import { IssuesComponent } from "./pages/issues/issues.component";
import { LoginComponent } from "./pages/Login/login/login.component";
import { MaterialModule } from "./pages/material/material.module";
import { ProfileComponent } from "./pages/profile/profile.component";
import { RegisterComponent } from "./pages/register/register.component";
import { UsersManagementComponent } from "./pages/users-management/users-management.component";
import { NavigationComponent } from "./shared/naviagation/naviagation.component";
import { ChangePasswordDialogComponent } from './pages/profile/change-password-dialog/change-password-dialog.component';
import { ConfirmDialogComponent } from './shared/confirm-component/confirm-component.component';
import { EditUserDialogComponent } from './pages/users-management/edit-user-dialog/edit-user-dialog.component';
import { RoleManagementComponent } from './pages/role-management/role-management.component';
import { AddGroupDialogComponent } from './pages/groups-management/dialogs/add-group-dialog/add-group-dialog.component';
import { UpdateRoleComponent } from './pages/role-management/dialogs/update-role/update-role.component';
import { AddRoleComponent } from './pages/users-management/add-role/add-role.component';
import { RemoveUserFromGroupComponent } from './pages/groups-management/dialogs/remove-user-from-group/remove-user-from-group.component';
import { AddUserToGroupComponent } from './pages/groups-management/dialogs/add-user-to-group/add-user-to-group.component';
import { ChangeLeaderComponent } from './pages/groups-management/dialogs/change-leader/change-leader.component';


@core.NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    BasePlatformComponent,
    AdminComponent,
    IssuesComponent,
    ProfileComponent,
    GroupComponent,
    FeedbackComponent,
    GroupsManagementComponent,
    UsersManagementComponent,
    RegisterComponent,
    IssuesManagementComponent,
    ChangePasswordDialogComponent,
    ConfirmDialogComponent,
    EditUserDialogComponent,
    RoleManagementComponent,
    AddGroupDialogComponent,
    UpdateRoleComponent,
    AddRoleComponent,
    RemoveUserFromGroupComponent,
    AddUserToGroupComponent,
    ChangeLeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: RequestsInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
