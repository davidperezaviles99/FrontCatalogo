import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pedidosComponent } from './pedidos.component';

describe('pedidosComponent', () => {
  let component: pedidosComponent;
  let fixture: ComponentFixture<pedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ pedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
