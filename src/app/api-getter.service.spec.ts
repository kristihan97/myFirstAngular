import { TestBed } from '@angular/core/testing';

import { ApiGetterService } from './api-getter.service';

describe('ApiGetterService', () => {
  let service: ApiGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
