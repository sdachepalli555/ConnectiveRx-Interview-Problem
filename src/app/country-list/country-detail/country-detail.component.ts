import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Country } from 'src/app/Shared/country.model';
import { CountryService } from 'src/app/Shared/country.service';



@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  @ViewChild('f', { static: false }) clForm: NgForm;
  country: Country;
  alpha3Code: string;
  countryName: string;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      debugger
      this.alpha3Code = params['alpha3code'];
      this.initForm();
    });
  }

  private initForm() {

    this.countryService.getCountryByAlpha3Code(this.alpha3Code).subscribe
      (
        (response) => {
          this.country = response;
          this.countryName = this.country.name;
          this.clForm.setValue({
            region: this.country.region,
            subregion: this.country.subregion,
            population: this.country.population,
            timezones: this.country.timezones.join(', ')
          })
        },
        (error) => console.log(error)
      )
  }
}
