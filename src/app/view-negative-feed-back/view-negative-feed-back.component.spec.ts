import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNegativeFeedBackComponent } from './view-negative-feed-back.component';

describe('ViewNegativeFeedBackComponent', () => {
  let component: ViewNegativeFeedBackComponent;
  let fixture: ComponentFixture<ViewNegativeFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNegativeFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNegativeFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
