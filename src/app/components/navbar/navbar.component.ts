import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  navButtons = [
    {
      url: '/contacts',
      text: 'Contacts',
    }
  ];
}
