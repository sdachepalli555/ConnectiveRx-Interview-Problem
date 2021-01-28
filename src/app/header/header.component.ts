import { Component } from '@angular/core';
import { CountryService } from 'src/app/Shared/country.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private countryService: CountryService) {}  

  onFetchData() {
    this.countryService.getAllCountries().subscribe();
  }
}
