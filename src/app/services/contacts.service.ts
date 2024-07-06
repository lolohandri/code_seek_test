import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ContactModel} from "../models/contact.model";
import {FormBuilder, Validators} from "@angular/forms";

const KEY = 'contacts';

@Injectable({
    providedIn: 'root'
})
export class ContactsService{
    contactsSubject = new BehaviorSubject<ContactModel[]>([]);
    contactsState = this.contactsSubject.asObservable();

    constructor(private _fb: FormBuilder) { }

    getById(id: number){
        return this.contactsSubject.value.find(contact => contact.id === id);
    }

    getAllData() : ContactModel[]  {
        let data = localStorage.getItem(KEY);
        if(data)
            this.contactsSubject.next(JSON.parse(data));
        return this.contactsSubject.value;
    }

    updateContacts(contacts: ContactModel[]){
        localStorage.setItem(KEY, JSON.stringify(contacts));
        this.contactsSubject.next(this.getAllData());
    }

    saveEditedContact(contact: ContactModel){
        const contacts = this.getAllData();
        const index = contacts.findIndex(c => c.id === contact.id);
        console.log(index)
        if (index !== -1) {
            contacts[index] = {
                ...contacts[index],
                ...contact
            };
            console.log(contacts[index])
            localStorage.setItem(KEY, JSON.stringify(contacts));
            this.contactsSubject.next(this.getAllData());
        }
    }

    getContactsForm(){
        return this._fb.group({
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            email: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            birthday: ['', [Validators.required]],
            sex: ['', [Validators.required]],
            address: this._fb.group({
                city: ['', [Validators.required]],
                country: ['', [Validators.required]],
                street: ['', [Validators.required]],
                street_num: ['', [Validators.required]],
                postal_code: ['', [Validators.required]],
            })
        })
    }
}
