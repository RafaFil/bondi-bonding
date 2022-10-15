import { Injectable } from '@angular/core';

import { Trip } from './../interfaces/Trip';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(tripData: Trip): Trip[] {
    return [];
  }
}
