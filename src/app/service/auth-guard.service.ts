import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
class PermissionService{
  constructor(private authService:AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.authService.isAuth){
      return true;
    }else {
      this.router.navigate(['/auth'])
    }

    return false;
  }
}
export const AuthGuardService: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PermissionService).canActivate(route, state);
}
