import { Injectable } from '@angular/core';
import { IPublisher } from './model/publisher'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private dataUri = 'http://localhost:3000/publishers'

  constructor(private http: HttpClient) { }

  addPublisher(publisher: IPublisher): Observable<IPublisher> {
    return this.http.post<IPublisher>(this.dataUri, publisher)
      .pipe(
        catchError(this.handleError)
      )
  }

  updatePublisher(id: string, publisher: IPublisher): Observable<IPublisher> {
    console.log('subscribing to update' + id);
    let publisherURI: string = this.dataUri + '/' + id;
    return this.http.put<IPublisher>(publisherURI, publisher)
      .pipe(
        catchError(this.handleError)
      )
  }

  deletePublisher(_id: string) {
    return this.http.delete<IPublisher>(this.dataUri + '/' + _id )
    .pipe(
      catchError(this.handleError)
    )
  }

  getPublishers(): Observable<IPublisher[]> {

    console.log("get publisher called" );

    return this.http.get<IPublisher[]>(`${this.dataUri}?limit=10`)
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