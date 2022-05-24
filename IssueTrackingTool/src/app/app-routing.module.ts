import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePlatformComponent } from './base-platform/base-platform.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ClientComponent } from './pages/client/client.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { GroupComponent } from './pages/group/group.component';
import { GroupsManagementComponent } from './pages/groups-management/groups-management.component';
import { IssuesManagementComponent } from './pages/issues-management/issues-management.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { LoginComponent } from './pages/Login/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';

const routes: Routes = [
  {
    path: 'base',
    component: BasePlatformComponent,
    children: [
      { path: 'admin', component: AdminComponent, children: [
        { path: 'manageUsers', component: UsersManagementComponent },
        { path: 'manageGroups', component: GroupsManagementComponent },
        { path: 'manageIssues', component: IssuesManagementComponent}
      ] },
      { path: 'client', component: ClientComponent },
      { path: 'issues', component: IssuesComponent },
      { path: 'group', component: GroupComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'feedback', component: FeedbackComponent }
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
