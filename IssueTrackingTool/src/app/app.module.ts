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
import { SolutionsManagementComponent } from "./pages/issues-management/solutions-management.component";
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
import { EditGroupComponent } from './pages/groups-management/dialogs/edit-group/edit-group.component';
import { AddIssueComponent } from './pages/issues/dialogs/add-issue/add-issue.component';
import { PriorityManagementComponent } from './pages/priority-management/priority-management.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { SeeGroupUsersComponent } from './pages/groups/dialogs/see-group-users/see-group-users.component';
import { SeeGroupTimeComponent } from './pages/groups/dialogs/see-group-time/see-group-time.component';
import { ViewIssueDetailsComponent } from './pages/issues/dialogs/view-issue-details/view-issue-details.component';
import { ChangeIssueStatusComponent } from './pages/issues/dialogs/change-issue-status/change-issue-status.component';
import { ChangeIssuePriorityComponent } from './pages/issues/dialogs/change-issue-priority/change-issue-priority.component';
import { AddSoutionComponent } from './pages/issues/dialogs/add-soution/add-soution.component';
import { EditIssueComponent } from './pages/issues/dialogs/edit-issue/edit-issue.component';


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
    SolutionsManagementComponent,
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
    EditGroupComponent,
    AddIssueComponent,
    PriorityManagementComponent,
    GroupsComponent,
    SeeGroupUsersComponent,
    SeeGroupTimeComponent,
    ViewIssueDetailsComponent,
    ChangeIssueStatusComponent,
    ChangeIssuePriorityComponent,
    AddSoutionComponent,
    EditIssueComponent,

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
