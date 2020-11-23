import { Component, OnInit, Input } from '@angular/core';
import { IPublisher } from 'src/app/model/publisher';

@Component({
  selector: 'app-publishers-row',
  templateUrl: './publishers-row.component.html',
  styleUrls: ['./publishers-row.component.css']
})
export class PublishersRowComponent implements OnInit {

  @Input() publisher: IPublisher;

  constructor() { }

  ngOnInit(): void {
  }

}
