import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: 'app/pages/home/home.module#HomeModule'
  },
  {
    path: 'flight',
    loadChildren: 'app/pages/flight/flight.module#FlightModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
