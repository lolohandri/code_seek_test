import {Component, OnInit} from '@angular/core';
import {ContactModel} from "../../models/contact.model";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ContactItemComponent} from "../../components/contact-item/contact-item.component";
import {AlertComponent} from "../../components/alert/alert.component";
import {ContactsService} from "../../services/contacts.service";
import {getAllData} from "../../helpers/db.helper";

@Component({
    selector: 'app-contacts',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        ContactItemComponent,
        AlertComponent,
        NgIf
    ],
    templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
    contacts!: ContactModel[];

    constructor(private _contactsService: ContactsService) { }

    ngOnInit() {
        this._contactsService.updateContacts(getAllData<ContactModel>('contacts'));
        this._contactsService.contactsState.subscribe(contacts => {
            this.contacts = contacts;
        })
    }
}
