import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsRowComponent } from './reviews-row.component';

describe('ReviewsRowComponent', () => {
  let component: ReviewsRowComponent;
  let fixture: ComponentFixture<ReviewsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
