import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { GameRowComponent } from './games/game-row/game-row.component';
import { PublishersListComponent } from './publishers/publishers-list/publishers-list.component';
import { PublishersDetailsComponent } from './publishers/publishers-details/publishers-details.component';
import { PublishersRowComponent } from './publishers/publishers-row/publishers-row.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { ReviewsDetailsComponent } from './reviews/reviews-details/reviews-details.component';
import { ReviewsRowComponent } from './reviews/reviews-row/reviews-row.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './games/game-forms/forms.component';
import { PublisherFormsComponent } from './publishers/publisher-forms/publisher-forms.component';
import { ReviewFormsComponent } from './reviews/review-forms/review-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailsComponent,
    GameRowComponent,
    PublishersListComponent,
    PublishersDetailsComponent,
    PublishersRowComponent,
    ReviewsListComponent,
    ReviewsDetailsComponent,
    ReviewsRowComponent,
    FormsComponent,
    PublisherFormsComponent,
    ReviewFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
