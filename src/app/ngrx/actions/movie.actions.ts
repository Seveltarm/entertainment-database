import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/models/movie.model';

export const retrivedMovies = createAction(
  '[Movie List] Get Every Movies',
  props<{ movies: any }>()
);

export const getSingleMovie = createAction(
  '[Movie List] Get Single Movie',
  props<{ movieId: number }>()
);

export const getGenre = createAction(
  '[Movie List] Get Movie Genre',
  props<{ movieGenre: string }>()
);
