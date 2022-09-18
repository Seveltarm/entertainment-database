import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie } from './../../models/movie.model';

export const selectMovies = createFeatureSelector<Array<Movie>>('movie');

export const selectMovieId = createFeatureSelector<number>('movieId');

export const selectGenre = createFeatureSelector<string>('movieGenre');

export const selectSingleMovie = createSelector(
    selectMovies,
    selectMovieId,
    (movies: Movie[], movieId: number) => {
        return movies.filter((movies) => movies.id === movieId);
    }
);

export const selectMovieByGenre = createSelector(
    selectMovies,
    selectGenre,
    (movies: Movie[], movieGenre: string) => {
        return movieGenre ? movies.filter((movies) => movies.genres.some((genre) => genre === movieGenre)) : movies;
    }

)
