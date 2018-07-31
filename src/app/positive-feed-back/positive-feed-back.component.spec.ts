import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveFeedBackComponent } from './positive-feed-back.component';

describe('PositiveFeedBackComponent', () => {
  let component: PositiveFeedBackComponent;
  let fixture: ComponentFixture<PositiveFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositiveFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
