import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { genreReducer, movieReducer, singleMovieReducer } from './ngrx/reducer/movie.reducer';
import { StoreModule } from '@ngrx/store';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ 
      movie: movieReducer, 
      movieId: singleMovieReducer, 
      movieGenre: genreReducer 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
