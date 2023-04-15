import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EsnRatesAutocompleteService } from './esn-rates-autocomplete.service';
import { debounceTime, switchMap, tap } from 'rxjs';

@Component({
  selector: 'esn-rates-autocomplete',
  templateUrl: 'esn-rates-autocomplete.component.html',
  styleUrls: ['esn-rates-autocomplete.scss']
})
export class EsnRatesAutocompleteComponent implements OnInit {
  @Input() data;
  select;
  form = this.formBuilder.group({
    inputs: new FormControl('', Validators.required)
  })
  loading = 1;
  result;

  constructor(
    private formBuilder: FormBuilder,
    private service: EsnRatesAutocompleteService) { }

  ngOnInit(): void {
    let data = {
      src: 'BTC',
      dest: 'USD'
    }
    this.form.get('inputs')?.valueChanges
      .pipe(
        tap((res: any) => {
          this.loading = 2
          this.select = res
        }
        ))
      .pipe(
        tap((d: any) => data.src = d.toUpperCase()),
        debounceTime(1500),
        switchMap(res => this.service.fetch(data))
      )
      .subscribe(
        (response) => {
          this.loading = 3
          this.result = response;
        },

      )

  }
}
