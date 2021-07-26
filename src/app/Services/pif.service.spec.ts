import { TestBed } from '@angular/core/testing';

import { PifService } from './pif.service';

describe('PifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PifService = TestBed.get(PifService);
    expect(service).toBeTruthy();
  });
});
