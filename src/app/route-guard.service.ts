import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // this.route.navigate(['users']);
    // return false ;
    return true ;
  }
}
