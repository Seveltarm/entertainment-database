import { Movie } from '../models/movie.model';

export interface AppState {
  movie: Array<Movie>;
  movieId: number;
}