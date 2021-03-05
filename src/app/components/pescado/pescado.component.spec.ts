import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { pescadoComponent } from './pescado.component';

describe('pescadoComponent', () => {
  let component: pescadoComponent;
  let fixture: ComponentFixture<pescadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ pescadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pescadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
