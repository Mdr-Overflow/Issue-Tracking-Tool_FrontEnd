import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/local-storage/storage.service';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenHeader = this.storageService.getAuthorizationToken();
    if(!(request.url.includes('login') || request.url.includes('register') || request.url.includes('refresh'))){
      request = request.clone({setHeaders: {Authorization: tokenHeader}});
    }


    return next.handle(request);
  }
}
