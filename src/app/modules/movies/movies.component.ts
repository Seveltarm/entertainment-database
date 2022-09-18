import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { fromEvent, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';

import { Movie } from 'src/app/models/movie.model';
import { selectMovies } from 'src/app/ngrx/selectors/movie.selectors';

@Component({
  selector: 'movie-movies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies$: Movie[];
  destroy$: Subject<void> = new Subject<void>();

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  colspan: number;

  constructor(
    private cdr: ChangeDetectorRef,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.select(selectMovies)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((movies) => {
        this.movies$ = movies;
        this.cdr.markForCheck();
      });

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((event: any) => {
        this.changeColspan(event)
        this.cdr.markForCheck();
      });

    this.changeColspan();  
  }

  changeColspan(event?: any): void {
    const width = event?.target.innerWitdh || window.innerWidth;
    if (width <= 1200) {
      this.colspan = 1;
    } else {
      this.colspan = 5;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
