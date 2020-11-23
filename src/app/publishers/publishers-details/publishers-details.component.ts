import { Component, OnInit, Input } from '@angular/core';
import { IPublisher } from '../../model/publisher';
@Component({
  selector: 'app-publishers-details',
  templateUrl: './publishers-details.component.html',
  styleUrls: ['./publishers-details.component.css']
})
export class PublishersDetailsComponent implements OnInit {

  @Input() publisher : IPublisher

  constructor() { }

  ngOnInit(): void {
  }

}
