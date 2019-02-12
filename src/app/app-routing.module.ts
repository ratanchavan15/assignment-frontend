import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from '../pages/add-movie/add-movie.component';
import { DashoardComponent } from '../pages/dashoard/dashoard.component';
import { ListMoviesComponent } from '../pages/add-movie/list-movies/list-movies.component';

const routes: Routes = [
  {
    path: '',
    component: ListMoviesComponent,
  },
  {
    path: 'delete',
    component: DashoardComponent,
  },
  {
    path: 'add',
    component: AddMovieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
