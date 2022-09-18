import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  const initialState = [
    {id: 'firstId', name: 'firstName'}
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      providers: [
        provideMockStore({initialState}),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
