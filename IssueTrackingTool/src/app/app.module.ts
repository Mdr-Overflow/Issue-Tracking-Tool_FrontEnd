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
