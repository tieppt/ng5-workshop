import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

function cscValidator(c: AbstractControl) {
  const { value } = c;
  if (value == '' || value == null) {
    return {
      required: 'CSC is required'
    }
  }
  if (value.toString().length !== 3) {
    return {
      length: 'CSC length must be 3'
    }
  }

  if (!Number.isInteger(value)) {
    return {
      integer: 'CSC must be 3 number'
    }
  }

  return null;
}

@Component({
  selector: 'tpc-mform',
  templateUrl: './mform.component.html',
  styleUrls: ['./mform.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MformComponent implements OnInit {

    mf: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mf = this.fb.group({
      cardNumber: ['', Validators.required],
      csc: ['', {
        validators: cscValidator,
        updateOn: 'blur'
      }]
    }, {
      validator: {
        validators: Validators.nullValidator,
        updateOn: 'submit'
      }
    });
    console.log(this.mf);
  }

  onSubmit() {
    console.log(this.mf);
  }

}
