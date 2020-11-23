import { Component, OnInit, Input } from '@angular/core';
import { IReview } from 'src/app/model/review';

@Component({
  selector: 'app-reviews-row',
  templateUrl: './reviews-row.component.html',
  styleUrls: ['./reviews-row.component.css']
})
export class ReviewsRowComponent implements OnInit {

  @Input() review: IReview;

  constructor() { }

  ngOnInit(): void {
  }

}
