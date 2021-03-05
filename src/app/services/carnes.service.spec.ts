import { TestBed } from '@angular/core/testing';

import { carnesService } from './carnes.service';

describe('CarnesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: carnesService = TestBed.get(carnesService);
    expect(service).toBeTruthy();
  });
});
