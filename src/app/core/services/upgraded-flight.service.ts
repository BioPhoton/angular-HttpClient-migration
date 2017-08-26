import {Injectable} from '@angular/core';

import {
  Headers,
  Http,
  RequestOptionsArgs,
  URLSearchParams
} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

import {environment} from '../../../environments/environment';
import {Flight} from '../models/Flight';
import {HttpErrorResponse} from '@angular/common/http';
import {IFlightService} from './flight.service.interface';

@Injectable()
export class UpgradedFlightService implements IFlightService {

  private baseUrl: string
  private resourceName = 'flight'

  constructor(private http: Http) {
    this.baseUrl = [environment.baseUrl, this.resourceName].join('/')
  }

  findById(id: string): Observable<Flight> {

    const headers = new Headers()
    headers.set('Accept', 'text/json')

    const search = new URLSearchParams()
    search.set('id', id)

    return this
      .http
      .get(this.baseUrl, {headers, search})
      .map(resp => resp.json())

  }

  find(from: string, to: string): Observable<Flight[]> {
    const headers = new Headers()
    headers.set('Accept', 'application/json')

    const search = new URLSearchParams()
    search.set('from', from)
    search.set('to', to)
    const reqParams: RequestOptionsArgs = {headers, search}

    return this
      .http
      .get(this.baseUrl, reqParams)
      .map(response => (response) ? response.json() : [])
      .catch(error => Observable.throw(error.json()))
  }

  create(flight: Flight): Observable<Flight> {
    const headers = new Headers()
    headers.set('Accept', 'application/json')

    const reqParams: RequestOptionsArgs = {headers}

    return this
      .http
      .post(this.baseUrl, flight, reqParams)
      .map((response) => (response) ? response.json() : [])
      .catch((e: HttpErrorResponse) => {
        let errMsg = 'Client Error'
        if (e.error instanceof Error) {
          errMsg = 'ServerError'
        }
        return Observable.throw({message: errMsg})
      })
  }



}
