import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private apiURL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiURL + '/movies');
  }
}
