import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrocherComponent } from './brocher.component';

describe('BrocherComponent', () => {
  let component: BrocherComponent;
  let fixture: ComponentFixture<BrocherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrocherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrocherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
