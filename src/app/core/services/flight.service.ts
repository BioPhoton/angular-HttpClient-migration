import {Injectable} from '@angular/core';

import {
  Headers,
  Http,
  RequestOptionsArgs,
  Response,
  URLSearchParams
} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/Rx';

import {environment} from '../../../environments/environment';
import {Flight} from '../models/Flight';

@Injectable()
export class FlightService {

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
      .catch(this.handleCreateError)
  }

  private handleCreateError = (error: Response) => {
    let errMsg = error.text()
    if (error.status === 500) {
      errMsg = 'Something went wrong!'
    }
    return Observable.throw({message: errMsg})
  }

}
