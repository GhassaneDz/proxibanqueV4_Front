import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPosFeedBackComponent } from './view-pos-feed-back.component';

describe('ViewPosFeedBackComponent', () => {
  let component: ViewPosFeedBackComponent;
  let fixture: ComponentFixture<ViewPosFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPosFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPosFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
