import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pescadosComponent } from './pescados.component';

describe('pescadosComponent', () => {
  let component: pescadosComponent;
  let fixture: ComponentFixture<pescadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ pescadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pescadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
