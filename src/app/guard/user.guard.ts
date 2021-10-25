import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(public userservice : UserService, public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.userservice.isLoggedIn()){
        this.router.navigate(["/app/dashboard"]);
        return true
      }
      else{
        this.router.navigate(["/app/login"]);
        return false
      };
    
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.userservice.isLoggedIn()){
        this.router.navigate(["/app/dashboard"]);
        return true
      }
      else{
        this.router.navigate(["/app/login"]);
        return false
      };
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.userservice.isLoggedIn()){
        this.router.navigate(["/app/dashboard"]);
        return true
      }
      else{
        this.router.navigate(["/app/login"]);
        return false
      };
  }
}
