import { Injectable } from '@angular/core';
import { IGame } from './model/games'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private dataUri = 'http://localhost:3000/games'

  constructor(private http: HttpClient) { }

  addGame(game: IGame): Observable<IGame> {
    return this.http.post<IGame>(this.dataUri, game)
      .pipe(
        catchError(this.handleError)
      )
  }

  updateGame(id: string, game: IGame): Observable<IGame> {
    console.log('subscribing to update' + id);
    let gameURI: string = this.dataUri + '/' + id;
    return this.http.put<IGame>(gameURI, game)
      .pipe(
        catchError(this.handleError)
      )
  }

  deleteGame(_id: string) {
    return this.http.delete<IGame>(this.dataUri + '/' + _id )
    .pipe(
      catchError(this.handleError)
    )
  }


  getGames(): Observable<IGame[]> {

    console.log("get games called" );

    return this.http.get<IGame[]>(`${this.dataUri}?limit=10`)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}