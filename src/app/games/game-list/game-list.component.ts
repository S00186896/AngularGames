import { Component, OnInit } from '@angular/core';
import { IGame } from '../../model/games';
import { GameService  }  from '../../game.service'
import { textChangeRangeIsUnchanged } from 'typescript';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  gameList: IGame[];
  message: string;
  showGameForm: boolean = false;

  currentGame : IGame;
  deleteGameBool: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getGames().subscribe({
      next: (value: IGame[] )=> this.gameList = value,
      complete: () => console.log('game service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked (game: IGame): void {
    this.currentGame = game;
  }

  openAddGame(): void {
    this.currentGame = null;
    this.showGameForm = true;
  }

  openEditGame(): void {
    this.showGameForm = true;
  }

  openDeleteGame(): void {
    this.deleteGameBool = true;
    console.log('Delete Game with id ' + this.currentGame._id);
    this.deleteGame(this.currentGame._id)
    window.location.reload();
  }

gameFormClose(game: IGame): void{
  this.showGameForm = null;
  console.table(game);

  if (game == null){
    this.currentGame = null;
  }

  else if (this.currentGame == null){
    this.addNewGame(game);
  }

  else {
    console.log('need to update game with id ' + this.currentGame._id);
    this.updateGame(this.currentGame._id, game)
  }
}
  
updateGame (id: string, game: IGame){
  this.gameService.updateGame(id, game)
  .subscribe({
    next: game => this.message = "game has been modified",
    error: (err) => this.message = err
  });

// so the updated list appears

    this.gameService.getGames().subscribe({
      next: (value: IGame[]) => this.gameList = value,
      complete: () => console.log('game service finished'),
      error: (mess) => this.message = mess
    })
    window.location.reload();
}

  addNewGame(newGame: IGame): void {
    console.log('adding new game ' + JSON.stringify(newGame));
    this.gameService.addGame({ genre: 'dsfdsfa', ...newGame })
      .subscribe({
        next: game => {
          console.log(JSON.stringify(game) + ' has been added');
        this.message = "new game has been added";},
        error: (err) => this.message = err
      });
      this.showGameForm = false;

      this.gameService.getGames().subscribe({
        next: (value: IGame[] ) => this.gameList = value,
        complete: () => console.log('Game Service Completed'),
        error: (messag) => this.message = messag
      })
      console.log("check if working");
      window.location.reload();
    }

  deleteGame(id:string) {
    this.gameService.deleteGame(id)
    .subscribe({
      next: game => this.message = "game has been deleted",
      error: (err) => this.message = err
    });

    this.gameService.getGames().subscribe({
      next: (value: IGame[] ) => this.gameList = value,
      complete: () => console.log('Game Service Completed'),
      error: (messag) => this.message = messag
    })
    window.location.reload();
  }



  isSelected(game: IGame): boolean{
    if (!game || !this.currentGame) {
      return false;
    }
    else {
      return game.id === this.currentGame.id;
    }
  }
}