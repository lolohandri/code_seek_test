import {Component, Input} from '@angular/core';
import {AddressModel} from "../../models/address.model";

@Component({
  selector: 'app-address-card',
  standalone: true,
  imports: [],
  templateUrl: './address-card.component.html'
})
export class AddressCardComponent {
    @Input({required: true}) address!: AddressModel;
}
