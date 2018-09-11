import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Inject, Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';

Injectable()
export class AuthGuard implements CanActivate {

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(state.url === '/auth') {
      if(!this.auth.isAuthenticated()) return true;
      this.router.navigateByUrl('/'); return false;
    } else {
      if (this.auth.isAuthenticated()) return true;
      this.router.navigateByUrl('/auth');
      return false;
    }

  }

  constructor(@Inject(AuthService) public auth: AuthService, private router: Router) {}

}
