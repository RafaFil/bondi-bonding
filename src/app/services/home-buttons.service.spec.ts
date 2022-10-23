import { TestBed } from '@angular/core/testing';

import { HomeButtonsService } from './home-buttons.service';

describe('HomeButtonsService', () => {
  let service: HomeButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
