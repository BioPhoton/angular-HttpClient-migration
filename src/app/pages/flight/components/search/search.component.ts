import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Flight} from '../../../../core/models/Flight';
import {FlightService} from '../../../../core/services/flight.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  flights$: Observable<Flight[]>
  searchForm: FormGroup

  constructor(private fs: FlightService, private fb: FormBuilder) {
    this.searchForm = fb.group({
      from: [],
      to: []
    })

    this.flights$ = this.fs.find('', '')
  }

  find(form: FormGroup) {
    const searchValues: { from: string, to: string } = form.value;
    this.flights$ = this.fs.find(searchValues.from, searchValues.to)
  }

}
