import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MovieFilter} from '../pages/dashoard/movieFilter'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashoardComponent } from '../pages/dashoard/dashoard.component';
import { DemoMaterialModule } from './material-module';
import {HttpRequestProvider} from '../providers/http-request/http-request';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { AddMovieComponent } from '../pages/add-movie/add-movie.component';
import { ListMoviesComponent } from '../pages/add-movie/list-movies/list-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    DashoardComponent,
    MovieFilter,
    AddMovieComponent,
    ListMoviesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule

  ],
  providers: [
    HttpRequestProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
