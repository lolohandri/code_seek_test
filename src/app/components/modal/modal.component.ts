import {Component, OnInit} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ContactsService} from "../../services/contacts.service";
import {SexEnum} from "../../enums/sex.enum";
import {ModalService} from "../../services/modal.service";
import {ContactModel} from "../../models/contact.model";
import ShortUniqueId from "short-unique-id";

@Component({
  selector: 'app-modal',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit{
    contactId!: number;
    contactsForm!: FormGroup;
    constructor(private _cs: ContactsService, private _ms: ModalService) { }

    ngOnInit(): void {
        this.contactsForm = this._cs.getContactsForm();
        this._ms.contactState.subscribe(contact => {
            this.contactsForm.reset(contact);
            this.contactId = contact.id;
        })
    }

    editContact(){
        console.log(this.contactId)
        this._cs.saveEditedContact({...this.contactsForm.value, id: this.contactId});
        this._ms.closeModal();
    }

    protected readonly SexEnum = SexEnum;
}
