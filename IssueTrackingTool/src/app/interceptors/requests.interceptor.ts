import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { StorageService } from '../services/local-storage/storage.service';
import { LoginService } from '../services/login/login.service';
import { ApiKey } from '../models/apiKeys';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private storageService: StorageService, private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<Object>> {
    const tokenHeader = this.storageService.getAuthorizationToken();
    if( request.url.includes('refresh')){
      var newAuthHeader = this.storageService.getRefreshToken();
      request = request.clone({setHeaders: {Authorization: newAuthHeader}});

      return next.handle(request);
    }
    else if(!(request.url.includes('login') || request.url.includes('register'))){
      request = request.clone({setHeaders: {Authorization: tokenHeader}});
      return next.handle(request).pipe(
        catchError((error) => {
          if(error instanceof HttpErrorResponse && error.status === 403)
          {
            this.handle401Error(request, next);
          }
          return throwError(error.message);
        })
      )
    }


    return next.handle(request);
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    this.loginService.getRefreshtoken().subscribe((result)=>{
      const token = result as ApiKey;
      this.storageService.saveCurrentToken(token);
      var newAuthHeader = this.storageService.getAuthorizationToken();
      request = request.clone({setHeaders: {Authorization: newAuthHeader}});

      return next.handle(request);
    },
    (error)=>{
      console.log(error);

      this.loginService.logout();
    })
  }
}
