import {Component, Input, OnInit} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {SexEnum} from "../../enums/sex.enum";

@Component({
  selector: 'app-form',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
    contactsForm!: FormGroup;
    @Input({required: true}) onSubmit!: Function;

    constructor(private _cs: ContactsService) { }

    ngOnInit(): void {
        this.contactsForm = this._cs.getContactsForm();
    }

    protected readonly SexEnum = SexEnum;
}
