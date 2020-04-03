import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventgalleryComponent } from './eventgallery.component';

describe('EventgalleryComponent', () => {
  let component: EventgalleryComponent;
  let fixture: ComponentFixture<EventgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
