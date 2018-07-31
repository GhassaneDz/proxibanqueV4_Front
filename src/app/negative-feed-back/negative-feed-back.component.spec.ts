import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeFeedBackComponent } from './negative-feed-back.component';

describe('NegativeFeedBackComponent', () => {
  let component: NegativeFeedBackComponent;
  let fixture: ComponentFixture<NegativeFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegativeFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
