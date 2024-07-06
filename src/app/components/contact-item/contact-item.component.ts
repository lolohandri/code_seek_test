import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ContactModel} from "../../models/contact.model";
import {AlertService} from "../../services/alert.service";
import {getAllData, saveData} from "../../helpers/db.helper";
import {ContactsService} from "../../services/contacts.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-contact-item',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './contact-item.component.html',
})
export class ContactItemComponent {
    @Input({required:true}) contact!: ContactModel;

    constructor(private _alertService: AlertService, private _contactsService: ContactsService, private _ms: ModalService) {
    }

    openModal(){
        let modal = document.getElementById('edit_modal') as any;
        if (modal)
            modal.showModal();
    }

    deleteContact(){
        this._alertService.showAlert(`Are you sure you want to delete 'Contact ${this.contact.id}' ?`)
        this._alertService.alertState.subscribe(alert => {
            if(alert.confirmed){
                let filteredData = this._contactsService.getAllData().filter(contact=> contact.id !== this.contact.id);
                if (filteredData)
                    this._contactsService.updateContacts(filteredData);
            }
        })
    }

    onEdit(){
        this.openModal();
        this._ms.setContact(this.contact);
    }
}
