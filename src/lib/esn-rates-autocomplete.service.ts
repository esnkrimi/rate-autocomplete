import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EsnRatesAutocompleteService {
  url;
  constructor(private http: HttpClient) { }
  fetch(data) {
    this.url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms="
    this.url += data.src + '&tsyms=' + data.dest
    console.log(this.url)
    return this.http.get(this.url)
      .pipe(
        map(d => {
          if (d && d[data.src]) {
            return d[data.src]['USD']
          }
        })
      )
  }
}
