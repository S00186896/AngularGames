import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './games/game-list/game-list.component';
import { PublishersListComponent } from './publishers/publishers-list/publishers-list.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';


const routes: Routes = [
  {path: 'game-list-component', component: GameListComponent},
  {path: 'publisher-list-component', component: PublishersListComponent},
  {path: 'review-list-component', component: ReviewsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }