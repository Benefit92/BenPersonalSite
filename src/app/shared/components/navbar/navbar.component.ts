import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar', templateUrl: './navbar.component.html', styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent {

  @Input() navOpen: boolean;
  @Output() navOpenChange = new EventEmitter();

  constructor() {
  }

  onMenuClick() {
    this.navOpen = !this.navOpen;
    this.navOpenChange.emit(this.navOpen);
  }
}
