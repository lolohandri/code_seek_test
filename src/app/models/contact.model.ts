import {AddressModel} from "./address.model";
import {SexEnum} from "../enums/sex.enum";

export interface ContactModel {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  date_of_birth: Date;
  email: string;
  address: AddressModel;
  sex: SexEnum;
}
