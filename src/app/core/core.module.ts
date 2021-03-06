import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FlightService} from './services/flight.service';
import {UpgradedFlightService} from './services/upgraded-flight.service';
import {GLOBAL_INTERCEPTER_PROVIDER} from './global.intercepter';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: FlightService, useClass: UpgradedFlightService},
        GLOBAL_INTERCEPTER_PROVIDER
      ]
    }
  }
}
