import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/models/movie.model';
import { getGenre, getSingleMovie, retrivedMovies } from '../actions/movie.actions';

export const initialGetMovies: ReadonlyArray<Movie> = [];
export const initialMovies: number = 0;
export const initialGenre: string = '';

export const movieReducer = createReducer(
    initialGetMovies,
    on(retrivedMovies, (state, { movies }) => movies)
);

export const singleMovieReducer = createReducer(
  initialMovies,
  on(getSingleMovie, (state, { movieId }) => movieId)
);

export const genreReducer = createReducer(
  initialGenre,
  on(getGenre, (state, { movieGenre }) => movieGenre)
)
