import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, take, takeUntil } from 'rxjs';

import { GenreType, Movie } from 'src/app/models/movie.model';
import { getGenre, retrivedMovies } from 'src/app/ngrx/actions/movie.actions';
import { selectMovieByGenre, selectMovies } from 'src/app/ngrx/selectors/movie.selectors';

@Component({
  selector: 'movie-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  readonly genreType = GenreType;
  
  selectedGenre = new FormArray([]);

  private movies: Movie[] = [];

  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(selectMovies)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((movies: Movie[]) => {
        if (!this.movies.length) {
          this.movies = movies
        }  
      });
  }

  filterGenre(): void {
    const movieGenre = this.selectedGenre?.toString();
    this.store.dispatch(getGenre({ movieGenre }));

    const movies = this.movies;
    this.store.dispatch(retrivedMovies({ movies }));

    this.store.select(selectMovieByGenre)
      .pipe(
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe((movies: Movie[]) =>
        this.store.dispatch(retrivedMovies({ movies }))
      )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
