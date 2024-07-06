import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CreateComponent} from "./pages/create/create.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/:id', component: ContactComponent},
  {path: 'create', component: CreateComponent}
];
