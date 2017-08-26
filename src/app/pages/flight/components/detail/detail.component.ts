import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Flight} from '../../../../core/models/Flight';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  backLink$: string
  flight$: Observable<Flight>

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.flight$ = this.route.data.pluck('flight')
  }

  goBack() {
    this.location.back();
  }

}
