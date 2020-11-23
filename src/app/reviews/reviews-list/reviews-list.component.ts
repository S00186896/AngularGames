import { Component, OnInit } from '@angular/core';
import { IReview } from '../../model/review';
import { ReviewService  }  from '../../review.service'
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {

  reviewList: IReview[];
  message: string;
  showReviewForm: boolean = false;

  currentReview : IReview;
  deleteReviewBool: boolean;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe({
      next: (value: IReview[] )=> this.reviewList = value,
      complete: () => console.log('review service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked (review: IReview): void {
    this.currentReview = review;
  }

  openAddReview(): void {
    this.currentReview = null;
    this.showReviewForm = true;
  }

  openEditReview(): void {
    this.showReviewForm = true;
  }

  openDeleteReview(): void {
    this.deleteReviewBool = true;
    console.log('Delete review with id ' + this.currentReview._id);
    this.deleteReview(this.currentReview._id)
    window.location.reload();
  }

  reviewFormClose(review: IReview): void{
    this.showReviewForm = null;
    console.table(review);
  

  if (review == null){
    this.currentReview = null;
  }

  else if (this.currentReview == null){
    this.addNewReview(review);
  }

  else {
    console.log('need to update review with id ' + this.currentReview._id);
    this.updateReview(this.currentReview._id, review)
  }
}

updateReview (id: string, review: IReview){
  this.reviewService.updateReview(id, review)
  .subscribe({
    next: review => this.message = "Review has been modified",
    error: (err) => this.message = err
  });

// so the updated list appears

    this.reviewService.getReviews().subscribe({
      next: (value: IReview[]) => this.reviewList = value,
      complete: () => console.log('Review service finished'),
      error: (mess) => this.message = mess
    })
    window.location.reload();
}

  addNewReview(newReview: IReview): void {
    console.log('adding new Review ' + JSON.stringify(newReview));
    this.reviewService.addReview({ IGN: 'dsfdsfa', ...newReview })
      .subscribe({
        next: review => {
          console.log(JSON.stringify(review) + ' has been added');
        this.message = "new Review has been added";},
        error: (err) => this.message = err
      });
      this.showReviewForm = false;

      this.reviewService.getReviews().subscribe({
        next: (value: IReview[] ) => this.reviewList = value,
        complete: () => console.log('Review Service Completed'),
        error: (messag) => this.message = messag
      })
      console.log("check if working");
      window.location.reload();
    }

    deleteReview(id:string) {
      this.reviewService.deleteReview(id)
      .subscribe({
        next: review => this.message = "Review has been deleted",
        error: (err) => this.message = err
      });
  
      this.reviewService.getReviews().subscribe({
        next: (value: IReview[] ) => this.reviewList = value,
        complete: () => console.log('Review Service Completed'),
        error: (messag) => this.message = messag
      })
      window.location.reload();
    }
  
  
  
    isSelected(review: IReview): boolean{
      if (!review || !this.currentReview) {
        return false;
      }
      else {
        return review._id === this.currentReview._id;
      }
  }
}
