import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/games';

@Component({
  selector: 'app-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.css']
})
export class GameRowComponent implements OnInit {

  @Input() game: IGame;

  constructor() { }

  ngOnInit(): void {
  }

}
