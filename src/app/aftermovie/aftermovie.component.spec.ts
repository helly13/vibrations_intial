import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AftermovieComponent } from './aftermovie.component';

describe('AftermovieComponent', () => {
  let component: AftermovieComponent;
  let fixture: ComponentFixture<AftermovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AftermovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AftermovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
