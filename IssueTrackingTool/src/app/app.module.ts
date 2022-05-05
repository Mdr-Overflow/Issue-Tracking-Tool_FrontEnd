import * as core from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/Login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './pages/material/material.module';
import { NavigationComponent } from './shared/naviagation/naviagation.component';
import { BasePlatformComponent } from './base-platform/base-platform.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GroupComponent } from './pages/group/group.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { GroupsManagementComponent } from './pages/groups-management/groups-management.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';

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
    UsersManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
