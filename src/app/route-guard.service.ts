import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private route: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   if (this.auth.isUserLoggedIn()) {
    return true;
   } else {
    this.route.navigate(['login']);
   }
  }
}
