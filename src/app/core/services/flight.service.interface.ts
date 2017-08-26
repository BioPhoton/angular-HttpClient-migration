import {Observable} from 'rxjs/Rx';
import {Flight} from '../models/Flight';

export interface IFlightService {

  findById(id: string): Observable<Flight>

  find(from: string, to: string): Observable<Flight[]>

  create(flight: Flight): Observable<Flight>

}
