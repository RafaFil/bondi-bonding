import { FormBuilder, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { catchError, Observable, of } from 'rxjs';

import { SearchRequest, SearchResult, TripFilters } from 'src/app/modules/core/interfaces';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getAge } from '../helpers/date.helper';

const SEARCH_ENDPOINT = `${environment.baseUrl}/trips/search`;

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchForm = this.fb.group({
    from: [ '' ],
    to: [ '' ],
    filters: new FormControl<TripFilters>({}),
    clickedBond: false
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private http: HttpClient) { }

  search(): Observable<SearchResult> {
    const user = this.authService.runningUser;
    const searchValue = this.searchForm.value;

    if (!user || !searchValue.clickedBond) {
      return of({ success: false });
    }

    const userAge = getAge(new Date(user.birthdate!));

    const searchRequest: SearchRequest = {
      myAge: userAge,
      myGender: user.gender!,
      from: searchValue.from,
      to: searchValue.to,
      filters: {
        ageRange: searchValue.filters?.ageRange,
        gender: searchValue.filters?.gender,
        likes: searchValue.filters?.likes
      }
    };

    this.searchForm.reset();
    return this.http.post<SearchResult>(SEARCH_ENDPOINT, searchRequest)
    .pipe(
      catchError( err => of(err))
    );
  }
}
