import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { verduraComponent } from './verdura.component';

describe('verduraComponent', () => {
  let component: verduraComponent;
  let fixture: ComponentFixture<verduraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ verduraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(verduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
