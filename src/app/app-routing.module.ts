import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailComponent } from './country-list/country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';

const appRoutes: Routes = [    
    { path: 'country-list', component: CountryListComponent },
    { path: 'country-detail/:alpha3code', component: CountryDetailComponent },
    { path: '', redirectTo: '/country-list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
