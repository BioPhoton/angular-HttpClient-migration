import {Location} from '@angular/common';
import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {FlightService} from '../../../../core/services/flight.service';

@Component({
  selector: 'flight-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {

  flightForm: FormGroup;
  message: string;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private fs: FlightService,
    private router: Router
  ) {
    this.flightForm = this.fb.group({
      from: [''],
      to: [''],
      date: ['']
    })
  }

  goBack() {
    this.location.back()
  }

  create(form) {

    if (form.valid) {
      this.fs.create(form.value)
        .subscribe(
          (response) => {
            this.router.navigate(['flight', response.id]);
          },
          (e) => {
            this.message = e.message
          }
        )
    } else {
      Object.keys(form.controls)
        .forEach((key) => { form.controls[key].markAsTouched() })
    }
  }

}
