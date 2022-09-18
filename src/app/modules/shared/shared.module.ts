import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FilterComponent } from 'src/app/components/filter/filter.component';
import { NavigateComponent } from 'src/app/components/navigate/navigate.component';

@NgModule({
  declarations: [
    FilterComponent,
    NavigateComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FilterComponent,
    NavigateComponent
  ]
})
export class SharedModule { }
