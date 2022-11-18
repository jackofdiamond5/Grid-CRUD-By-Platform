import { TestBed } from '@angular/core/testing';

import { NorthwindDataService } from './northwind-data.service';

describe('NorthwindService', () => {
  let service: NorthwindDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorthwindDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
