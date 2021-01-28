import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Country } from './country.model'

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  displayCountry = new Subject<Country>();
  constructor(private http: HttpClient) { }
  private getAllCountriesurl: string = "https://restcountries.eu/rest/v2/all";
  private getCountryByAlpha3Codeurl: string = "https://restcountries.eu/rest/v2/alpha/";

  getAllCountries() {
    return this.http.get<Country[]>(this.getAllCountriesurl);
  }
  getCountryByAlpha3Code(alpha3code: string) {    
    return this.http.get<Country>(this.getCountryByAlpha3Codeurl + alpha3code);
  }
}