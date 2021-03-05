import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pedidoComponent } from './pedido.component';

describe('pedidoComponent', () => {
  let component: pedidoComponent;
  let fixture: ComponentFixture<pedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ pedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
