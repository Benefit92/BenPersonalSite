import { Component } from '@angular/core';

@Component({
  selector: 'app-nav', templateUrl: './nav.component.html', styleUrls: [ './nav.component.sass' ]
})
export class NavComponent {
  public collapseNavMenu = true;

  toggleNavMenu() {
    this.collapseNavMenu = !this.collapseNavMenu;
    console.log(this.collapseNavMenu);
  }
}
