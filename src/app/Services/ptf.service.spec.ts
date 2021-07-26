import { TestBed } from '@angular/core/testing';

import { PtfService } from './ptf.service';

describe('PtfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PtfService = TestBed.get(PtfService);
    expect(service).toBeTruthy();
  });
});
