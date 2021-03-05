import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { verdurasComponent } from './verduras.component';

describe('verdurasComponent', () => {
  let component: verdurasComponent;
  let fixture: ComponentFixture<verdurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ verdurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(verdurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
