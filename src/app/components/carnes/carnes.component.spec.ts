import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { carnesComponent } from './carnes.component';

describe('carnesComponent', () => {
  let component: carnesComponent;
  let fixture: ComponentFixture<carnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ carnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(carnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
