import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosFeedBackComponent } from './pos-feed-back.component';

describe('PosFeedBackComponent', () => {
  let component: PosFeedBackComponent;
  let fixture: ComponentFixture<PosFeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosFeedBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosFeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
