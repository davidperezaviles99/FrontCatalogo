import { TestBed } from '@angular/core/testing';

import { pescadosService } from './pescados.service';

describe('pescadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: pescadosService = TestBed.get(pescadosService);
    expect(service).toBeTruthy();
  });
});
