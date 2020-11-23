import { Component, Input, OnInit } from '@angular/core';
import { IGame } from '../../model/games';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  @Input() game : IGame

  constructor() { }

  ngOnInit(): void {
  }

}
