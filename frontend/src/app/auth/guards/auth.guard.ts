import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    const redirectUrl = decodeURI(route.path);
    this.router.navigate(['/login'], { queryParams: { redirectUrl } });
    return this.authService.isLoggedIn;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    }

    const redirectUrl = decodeURI(state.url);
    this.router.navigate(['/login'], { queryParams: { redirectUrl } });
    return this.authService.isLoggedIn;
  }
}
