import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { carneComponent } from './carne.component';

describe('carneComponent', () => {
  let component: carneComponent;
  let fixture: ComponentFixture<carneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ carneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(carneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
