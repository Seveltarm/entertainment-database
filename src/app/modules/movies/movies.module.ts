import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { PreviewComponent } from './components/preview/preview.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MoviesComponent,
    SingleMovieComponent,
    PreviewComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
