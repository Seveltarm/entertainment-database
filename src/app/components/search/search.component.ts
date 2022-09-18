import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';

import { Movie } from 'src/app/models/movie.model';
import { retrivedMovies } from 'src/app/ngrx/actions/movie.actions';
import { selectMovies } from 'src/app/ngrx/selectors/movie.selectors';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  filter = new FormControl<string>('');
  filteredOptions: Observable<Movie[]>;
  
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(selectMovies).subscribe((movies) => {
      if (!this.movies.length) {
        this.movies = movies;
      }
    });

    this.filteredOptions = this.filter.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this._filter(value || '');
      }),
    );
  }

  private _filter(value: string): Movie[] {
    const filterValue = value.toLowerCase();
    const filteredMovies: Array<Movie> = this.movies.filter((movie: Movie) => movie.name.toLowerCase().includes(filterValue));

    const movies = filteredMovies;
    this.store.dispatch(retrivedMovies({ movies }));

    return movies;
  }
}
