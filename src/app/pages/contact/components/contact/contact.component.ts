import { Component } from '@angular/core';
import { ToastService } from '../../../../shared/services/toast.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact', templateUrl: './contact.component.html', styleUrls: [ './contact.component.sass' ]
})
export class ContactComponent {

  contactMeForm = new FormGroup({
    firstName: new FormControl(''), lastName: new FormControl(''), messageBody: new FormControl(''),
  });

  constructor(public toastService: ToastService, private contactService: ContactService) {
  }

  onSubmit() {
    console.log(this.contactMeForm.value);
    this.contactService.addContact(this.contactMeForm.value)
      .subscribe((data: any) => {
        console.log(data);
      });
    this.toastService.show('I am a success toast', {classname: 'bg-success text-light', delay: 10000});
  }
}
