import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegFeedBackComponent } from './neg-feed-back.component';

describe('NegFeedBackComponent', () => {
  let component: NegFeedBackComponent;
  let fixture: ComponentFixture<NegFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
