import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabpassComponent } from './grabpass.component';

describe('GrabpassComponent', () => {
  let component: GrabpassComponent;
  let fixture: ComponentFixture<GrabpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
