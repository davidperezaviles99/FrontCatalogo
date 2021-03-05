import { TestBed } from '@angular/core/testing';

import { verdurasService } from './verduras.service';

describe('verdurasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: verdurasService = TestBed.get(verdurasService);
    expect(service).toBeTruthy();
  });
});
