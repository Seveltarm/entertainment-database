import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './components/preview/preview.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'preview/:id', component: PreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
