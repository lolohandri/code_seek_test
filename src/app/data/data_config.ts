import {ContactModel} from "../models/contact.model";
import {SexEnum} from "../enums/sex.enum";

export const data : ContactModel[] = [
  {
    id: 1,
    first_name: 'Sviatoslav',
    last_name: 'Nakonechniy',
    phone: '+380993232521',
    date_of_birth: new Date('2003-10-04'),
    email: 'sviatko228@gmail.com',
    address: {
      city: 'Lviv',
      country: 'Ukraine',
      street: 'Shevchenka',
      street_num: 327,
      postal_code: '81092'
    },
    sex: 0
  },
  {
    id: 2,
    first_name: 'Stepan',
    last_name: 'Nakonechniy',
    phone: '+380993232521',
    date_of_birth: new Date('2003-10-04'),
    email: 'sviatko228@gmail.com',
    address: {
      city: 'Lviv',
      country: 'Ukraine',
      street: 'Shevchenka',
      street_num: 327,
      postal_code: '81092',
    },
    sex: 0
  },
  {
    id: 3,
    first_name: 'Veronika',
    last_name: 'Kuzik',
    phone: '+380993212544',
    date_of_birth: new Date('2005-11-04'),
    email: 'sviatko228@gmail.com',
    address: {
      city: 'Lviv',
      country: 'Ukraine',
      street: 'Kopernika',
      street_num: 24,
      postal_code: '81092'
    },
    sex: 1
  }
];
