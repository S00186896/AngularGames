import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IReview } from 'src/app/model/review';
import { ReviewService } from '../../review.service';

@Component({
  selector: 'app-review-forms',
  templateUrl: './review-forms.component.html',
  styleUrls: ['./review-forms.component.css']
})
export class ReviewFormsComponent implements OnInit {

  @Input() review : IReview;

  @Output() reviewFormClose = new EventEmitter<IReview>();

  message: string = '';
  isNewReviewForm: boolean = false;
  reviewForm: FormGroup;

  get IGN() {
    return this.reviewForm.get('IGN');
  }
  get GameSpot() {
    return this.reviewForm.get('GameSpot');
  }
  get MetaCritic() {
    return this.reviewForm.get('MetaCritic');
  }
  get reviewId() {
    return this.reviewForm.get('reviewId');
  }

  constructor() { }

  ngOnInit(): void {
    console.table(this.review);
    if (this.review == null) {
      this.review = {IGN:'', GameSpot: '', MetaCritic: '', reviewId: '', _id: ''};
      this.isNewReviewForm = true;
    }

    this.reviewForm = new FormGroup({
      IGN: new FormControl(this.review.IGN, [Validators.required]),
      GameSpot: new FormControl(this.review.GameSpot, [Validators.required]),
      MetaCritic: new FormControl(this.review.MetaCritic,[Validators.required]),
      reviewId: new FormControl(this.review.reviewId, [Validators.required]),
    });
  }
  onSubmit() {
    this.reviewFormClose.emit(this.reviewForm.value)
  }

  closeForm(){
    this.reviewFormClose.emit(null)
  }

}
