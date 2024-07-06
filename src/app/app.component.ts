import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {getAllData} from "./helpers/db.helper";
import {ContactModel} from "./models/contact.model";
import {ModalComponent} from "./components/modal/modal.component";
import {AlertComponent} from "./components/alert/alert.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NavbarComponent, ModalComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Contacts';

  ngOnInit(){
    getAllData<ContactModel[]>('contacts');
  }
}
