import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const STATIC_CONTENT_ENDPOINT = `${environment.baseUrl}/static/tos`;

@Injectable({
  providedIn: 'root'
})
export class TosService {

  constructor(private http: HttpClient) { }

  getTos(): Observable<
    {
      success: boolean,
      data? : Array<{text : string}>,
      message?: string
    }
  > {
    return this.http.get<    {
      success: boolean,
      data? : Array<{text : string}>,
      message?: string
    }>(STATIC_CONTENT_ENDPOINT);
  }
}
