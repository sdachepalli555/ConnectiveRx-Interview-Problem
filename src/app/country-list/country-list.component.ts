import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Country } from '../Shared/country.model';
import { CountryService } from '../Shared/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService, private route: ActivatedRoute,
    private router: Router) { }  

  ngOnInit() {
    this.countryService.getAllCountries().subscribe
      (
        (response) => {
          this.countries = response;
        },
        (error) => console.log(error)
      )
  }

  onEditCountry(alpha3code: string) {     
    this.router.navigate(['/country-detail', alpha3code]);
  }

}