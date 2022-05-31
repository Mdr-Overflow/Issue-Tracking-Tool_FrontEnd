import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePlatformComponent } from './base-platform/base-platform.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { GroupsManagementComponent } from './pages/groups-management/groups-management.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { LoginComponent } from './pages/Login/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { RoleManagementComponent } from './pages/role-management/role-management.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';

const routes: Routes = [
  {
    path: 'base',
    component: BasePlatformComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: 'manageUsers', component: UsersManagementComponent },
          { path: 'manageGroups', component: GroupsManagementComponent },
          {
            path: 'manageroles',
            component: RoleManagementComponent,
          },
        ],
      },
      { path: 'issues', component: IssuesComponent },
      { path: 'allGroups', component: GroupsComponent},
      { path: 'profile', component: ProfileComponent },
      { path: 'feedback', component: FeedbackComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
