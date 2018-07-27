import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNegFeedBackComponent } from './view-neg-feed-back.component';

describe('ViewNegFeedBackComponent', () => {
  let component: ViewNegFeedBackComponent;
  let fixture: ComponentFixture<ViewNegFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNegFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNegFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
