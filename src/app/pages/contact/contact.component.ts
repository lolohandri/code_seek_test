import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {SexEnum} from "../../enums/sex.enum";
import {ContactModel} from "../../models/contact.model";
import {ActivatedRoute} from "@angular/router";
import {getAllData} from '../../helpers/db.helper';
import moment from "moment";
import {AddressCardComponent} from "../../components/address-card/address-card.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    imports: [
        NgForOf,
        NgIf,
        NgOptimizedImage,
        AddressCardComponent
    ]
})
export class ContactComponent implements OnInit {
    id!: number;
    contact!: ContactModel;
    contacts = getAllData<ContactModel>('contacts');

    constructor(private router: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.params.subscribe(params => {
            let id = +params['id'];
            let contact = this.contacts?.find(contact => contact.id === id);
            if(contact)
                this.contact = contact;
        })
    }

    getImageUrl() {
        return (this.contact.sex == SexEnum.MALE) ?
            "/assets/images/male.jpg" : "/assets/images/female.jpg";
    }

    convertDate(date: Date){
        return moment(date).format('LL');
    }
}
