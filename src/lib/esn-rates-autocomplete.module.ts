import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EsnRatesAutocompleteComponent } from './esn-rates-autocomplete.component';



@NgModule({
  declarations: [
    EsnRatesAutocompleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  exports: [
    EsnRatesAutocompleteComponent
  ]
})
export class EsnRatesAutocompleteModule { }
