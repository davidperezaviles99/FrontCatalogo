import { TestBed } from '@angular/core/testing';

import { pedidosService } from './pedidos.service';

describe('pedidosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: pedidosService = TestBed.get(pedidosService);
    expect(service).toBeTruthy();
  });
});
