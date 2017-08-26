import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRouterModule} from './app.routing.module';
import {CoreModule} from './core/core.module';
import {HomeModule} from './pages/home/home.module';
import {FlightModule} from './pages/flight/flight.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    CoreModule.forRoot(),
    HomeModule,
    FlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
