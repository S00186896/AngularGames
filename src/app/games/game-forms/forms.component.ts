import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGame } from 'src/app/model/games';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Input() game : IGame;

  @Output() gameFormClose = new EventEmitter<IGame>();

  message: string = '';
  isNewGameForm: boolean = false;
  gameForm: FormGroup;

  

  get title() {
    return this.gameForm.get('title');
  }
  get genre() {
    return this.gameForm.get('genre');
  }
  get platforms() {
    return this.gameForm.get('platforms');
  }
  get id() {
    return this.gameForm.get('id');
  }
  get imageGame() {
    return this.gameForm.get('imageGame');
  }

  constructor() { }

  ngOnInit(): void {
    console.table(this.game);
    if (this.game == null) {
      this.game = {title:'', genre: '', platforms: '', id: '', imageGame: '', _id: ''};
      this.isNewGameForm = true;
    }

    this.gameForm = new FormGroup({
      title: new FormControl(this.game.title, [Validators.required]),
      genre: new FormControl(this.game.genre, [Validators.required]),
      platforms: new FormControl(this.game.platforms,[Validators.required]),
      id: new FormControl(this.game.id, [Validators.required]),
      imageGame: new FormControl(this.game.imageGame, [Validators.required]),
    });
  }
  onSubmit() {
    this.gameFormClose.emit(this.gameForm.value)
  }

  closeForm(){
    this.gameFormClose.emit(null)
  }
}

