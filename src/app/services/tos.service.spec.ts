import { TestBed } from '@angular/core/testing';

import { TosService } from './tos.service';

describe('TosService', () => {
  let service: TosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
