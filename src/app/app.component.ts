import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrivedMovies } from './ngrx/actions/movie.actions';
import { selectMovies } from './ngrx/selectors/movie.selectors';

import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-database';
  movies$ = this.store.select(selectMovies);

  constructor (
    private store: Store,
    private rest: RestService
  ) {}

  ngOnInit() {
    this.rest.getMovies().subscribe((movies) => 
      this.store.dispatch(retrivedMovies({ movies })) 
    );
  }
}
