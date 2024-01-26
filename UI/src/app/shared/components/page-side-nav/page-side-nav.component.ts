import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

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

  constructor(private apiService: ApiService, private router: Router){
    this.navItems = [
      {value: 'Room Booking', link: '/booking'},
      {value: 'Pending Booking', link: '/pending'},
      {value: 'Conformed Booking', link: '/conform'},
    ];

    apiService.userStatus.subscribe({
      next: status => {
        if(status == 'loggedIn'){
          router.navigateByUrl("/home");
        }
        else{

        }
      }
    })
  }

}
