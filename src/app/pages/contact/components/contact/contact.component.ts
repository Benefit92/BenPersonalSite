import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../../shared/services/toast.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact', templateUrl: './contact.component.html', styleUrls: [ './contact.component.sass' ]
})
export class ContactComponent implements OnInit {

  contactMeForm = new FormGroup({
    firstName: new FormControl(''), lastName: new FormControl(''), messageBody: new FormControl(''),
  });

  constructor(public toastService: ToastService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.toastService.show('I am a success toast', {classname: 'bg-success text-light', delay: 10000});
  }
}
