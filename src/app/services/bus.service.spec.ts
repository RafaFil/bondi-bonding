import { TestBed } from '@angular/core/testing';

import { BusService } from './bus.service';

describe('StopsService', () => {
  let service: BusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
