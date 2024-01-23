import { Component } from '@angular/core';

export interface NavigationItem {
  value: string;
  link: string;
}

@Component({
  selector: 'page-side-nav',
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.scss'
})
export class PageSideNavComponent {

  panelName: string = 'User Panel'
  navItems: NavigationItem[] = [];

  constructor(){
    this.navItems = [
      {value: 'Room Booking', link: '/booking'},
      {value: 'Pending Booking', link: '/pending'},
      {value: 'Conformed Booking', link: '/conform'},
    ]
  }

}
