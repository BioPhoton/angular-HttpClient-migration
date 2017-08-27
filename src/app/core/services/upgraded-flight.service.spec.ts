import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {RequestMethod} from '@angular/http';

import 'rxjs/add/observable/of';

import {UpgradedFlightService} from './upgraded-flight.service';

describe('AdvancedUpgradedFlightService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UpgradedFlightService
      ]
    });

  });

  it('should be created', inject([UpgradedFlightService], (service: UpgradedFlightService) => {
    expect(service).toBeTruthy();
  }));

  it('expects a GET request', inject([UpgradedFlightService, HttpTestingController], (service: UpgradedFlightService, httpMock: HttpTestingController) => {
    const expectedUrl = 'http://angular.at/api/flight?id=3';
    const expectedMethod = 'Get';
    const expectedResult: any = {
      id: 3,
      from: 'Wien',
      to: 'Hamburg',
      date: '2017-12-24T17:00:00.000+01:00'
    };

    // Make an HTTP GET request, and expect that it return an object
    // of the form {name: 'Test Data'}.
    service
      .findById('3')
      .subscribe(data => expect(data).toEqual(expectedResult));

    // At this point, the request is pending, and no response has been
    // sent. The next step is to expect that the request happened.
    const req = httpMock.expectOne(expectedUrl);

    // If no request with that URL was made, or if multiple requests match,
    // expectOne() would throw. However this test makes only one request to
    // this URL, so it will match and return a mock request. The mock request
    // can be used to deliver a response or make assertions against the
    // request. In this case, the test asserts that the request is a GET.
    expect(req.request.method).toBe(expectedMethod);

    // Next, fulfill the request by transmitting a response.
    req.flush(expectedResult);

    // Finally, assert that there are no outstanding requests.
    httpMock.verify();
  }));

});
