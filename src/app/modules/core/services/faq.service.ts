import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Faq } from '../interfaces';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const FAQS_ENDPOINT = `${environment.baseUrl}/static/faqs`;

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  getFaqs(): Observable<
    {
      success: boolean,
      data? : Faq[],
      message?: string
    }
  > {
    return this.http.get<    {
      success: boolean,
      data? : Faq[],
      message?: string
    }>(FAQS_ENDPOINT);
  }
}
