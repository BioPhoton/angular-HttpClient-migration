import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Flight} from '../../../../core/models/flight';
import {FlightService} from '../../../../core/services/flight.service';

@Component({
  selector: 'flight-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  flightForm: FormGroup;
  message: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private fs: FlightService,
    private router: Router
  ) {
    this.flightForm = this.fb.group({
      id: [''],
      from: [''],
      to: [''],
      date: ['']
    })
  }

  ngOnInit() {
    this.route.data.pluck('flight')
      .subscribe((f: Flight) => {
        this.flightForm.patchValue(f, {emitEvent: false})
      })
  }

  goBack() {
    this.location.back()
  }

  create(form) {
    if (form.valid) {
      this.fs.create(form.value)
        .subscribe(
          (n) => {
            this.router.navigate(['../search'])
          },
          (e) => {
            this.message = e.message
          }
        )
    }
  }

}
