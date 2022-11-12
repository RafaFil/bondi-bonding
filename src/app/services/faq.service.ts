import { MOCKED_FAQS } from './../mocks/faq.mock';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Faq } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor() { }

  getFaqs(): Observable<Faq[]> {
    return of(MOCKED_FAQS);
  }
}
