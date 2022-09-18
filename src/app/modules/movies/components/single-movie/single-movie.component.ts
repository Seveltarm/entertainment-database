import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'movie-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent {
  @Input() title: Movie;
}
