import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription, takeUntil } from 'rxjs';

import { getSingleMovie } from 'src/app/ngrx/actions/movie.actions';
import { selectSingleMovie } from 'src/app/ngrx/selectors/movie.selectors';

import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'movie-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  singleMovie: Movie[];

  private subscription: Subscription;
  private destroy$: Subject<void> = new Subject<void>();
  
  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        const movieId = Number(params['id']);
        this.store.dispatch(getSingleMovie({ movieId }));
      });

    this.store.select(selectSingleMovie)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((movie: Movie[]) =>
        this.singleMovie = movie
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
