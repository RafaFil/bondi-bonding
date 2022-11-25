import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.validateToken()
      .pipe(
        tap( valid => {
          if ( !valid ) {
            this.router.navigateByUrl('/');
          }
        })
      );
  }

  canLoad(): Observable<boolean> {
    return this.canActivate();
  }

}
