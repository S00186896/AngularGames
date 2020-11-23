import { Component, OnInit, Input } from '@angular/core';
import { IReview } from '../../model/review';

@Component({
  selector: 'app-reviews-details',
  templateUrl: './reviews-details.component.html',
  styleUrls: ['./reviews-details.component.css']
})
export class ReviewsDetailsComponent implements OnInit {

  @Input() review : IReview

  constructor() { }

  ngOnInit(): void {
  }

}
