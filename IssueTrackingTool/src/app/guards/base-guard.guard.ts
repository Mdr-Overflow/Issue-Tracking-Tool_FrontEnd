import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../models/role';
import { StorageService } from '../services/local-storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class BaseGuardGuard implements CanActivate {
  constructor(private storageService: StorageService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      var temp = this.storageService.getCurrentUser();
      if(temp){
        var authUser = temp;
      }
      else{
        return false;
      }
      var canActivate = false;
      switch(state.url){
        case "/base/admin":
          authUser.roles.forEach((role: any)=>{
              role.privileges.forEach((privilige: any) =>{
                if(privilige.name === "GET_ISSUEDASHBOARD_GET" || role.name === "ROLE_ADMIN" || role.name === "ROLE_SUPER_ADMIN"){
                  return true;
                }
                return false;
              })
          })
          break;
          default:
            return true;
            break;
      }

      return true;
  }

}
