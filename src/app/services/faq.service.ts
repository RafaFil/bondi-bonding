import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Faq } from '../interfaces';
import { MOCKED_FAQS } from './../mocks';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor() { }

  getFaqs(): Observable<Faq[]> {
    return of(MOCKED_FAQS);
  }
}
