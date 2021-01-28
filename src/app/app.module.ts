import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryService } from './Shared/country.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-list/country-detail/country-detail.component';

@NgModule({  
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryListComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CountryService],  
  bootstrap: [AppComponent]
})
export class AppModule {}
