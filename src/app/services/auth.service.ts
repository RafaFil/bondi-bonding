import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthRequest, User } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  runningUser?: User;

  constructor(private router: Router) { }

  doUserAuth(authRequest: AuthRequest): Observable<boolean | undefined> {
    this.runningUser = {
      name: 'Juan Carlos',
      username: 'juancarlos',
      iconUrl: 'https://phantom-telva.unidadeditorial.es/99da4ecff6d748daf9a16d16aa868bef/crop/0x0/2038x2880/resize/828/f/jpg/assets/multimedia/imagenes/2021/05/06/16202888369890.jpg',
      uid: '9999'
    };

    return of(true);
  }
}
