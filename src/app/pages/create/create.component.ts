import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ContactModel} from "../../models/contact.model";
import {FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SexEnum} from "../../enums/sex.enum";
import {Router} from "@angular/router";
import {ContactsService} from "../../services/contacts.service";
import {FormComponent} from "../../components/form/form.component";

@Component({
  selector: 'app-create',
  standalone: true,
    imports: [
        NgForOf,
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        JsonPipe,
        FormComponent
    ],
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit{
    contactForm!: FormGroup;

    constructor(private _cs: ContactsService, private router: Router) {
    }

    ngOnInit(): void {
        this.contactForm = this._cs.getContactsForm();
        console.log(this.contactForm.value)
    }


    createContact(){
        let random_number = Math.floor(Math.random() * 16);
        const isLocalStorage = localStorage.getItem('contacts');
        if (isLocalStorage){
            const oldArray: ContactModel[] = JSON.parse(isLocalStorage);
            let id = random_number;
            oldArray.push({id, ...this.contactForm.value});
            localStorage.setItem('contacts', JSON.stringify(oldArray));
        }else{
            const newArray : ContactModel[] = [];
            newArray.push({id: random_number, ...this.contactForm.value});
            localStorage.setItem('contacts', JSON.stringify(newArray));
        }
        this.router.navigate(['/contacts']);
    }

    protected readonly SexEnum = SexEnum;
}
