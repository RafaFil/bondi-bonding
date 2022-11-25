import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const TOS_ENDPOINT = `${environment.baseUrl}/static/tos`;

@Injectable({
  providedIn: 'root'
})
export class TosService {

  constructor(private http: HttpClient) { }

  getTos(): Observable<
    {
      success: boolean,
      data? : string,
      message?: string
    }
  > {
    return this.http.get<    {
      success: boolean,
      data? : string,
      message?: string
    }>(TOS_ENDPOINT)
    .pipe(
      catchError( err => of(err))
    );
  }
}
