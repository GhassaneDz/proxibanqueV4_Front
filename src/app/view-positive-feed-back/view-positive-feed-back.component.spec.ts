import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPositiveFeedBackComponent } from './view-positive-feed-back.component';

describe('ViewPositiveFeedBackComponent', () => {
  let component: ViewPositiveFeedBackComponent;
  let fixture: ComponentFixture<ViewPositiveFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPositiveFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPositiveFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
