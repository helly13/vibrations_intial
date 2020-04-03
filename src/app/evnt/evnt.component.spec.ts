import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvntComponent } from './evnt.component';

describe('EvntComponent', () => {
  let component: EvntComponent;
  let fixture: ComponentFixture<EvntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
