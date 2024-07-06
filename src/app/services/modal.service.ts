import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ContactModel} from "../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
    private contactSubject = new Subject<ContactModel>();
    contactState = this.contactSubject.asObservable();

    setContact(contact: ContactModel){
        this.contactSubject.next(contact);
    }

    closeModal(){
        let modal = document.getElementById('edit_modal') as any;
        if (modal)
            modal.close();
    }
}
