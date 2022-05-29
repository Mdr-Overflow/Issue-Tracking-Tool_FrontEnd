import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePlatformComponent } from './base-platform/base-platform.component';
import { Priority } from './models/priority';
import { AdminComponent } from './pages/admin/admin.component';
import { ClientComponent } from './pages/client/client.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { GroupComponent } from './pages/group/group.component';
import { GroupsManagementComponent } from './pages/groups-management/groups-management.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { SolutionsManagementComponent } from './pages/issues-management/solutions-management.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { LoginComponent } from './pages/Login/login/login.component';
import { PriorityManagementComponent } from './pages/priority-management/priority-management.component';
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
          { path: 'manageIssues', component: SolutionsManagementComponent },
          {
            path: 'manageroles',
            component: RoleManagementComponent,
          },
          {path:'managePriority', component: PriorityManagementComponent}
        ],
      },
      { path: 'client', component: ClientComponent },
      { path: 'issues', component: IssuesComponent },
      { path: 'group', component: GroupComponent },
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
