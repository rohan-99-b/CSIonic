import { Component, OnInit } from '@angular/core';
import {Contacts} from '@capacitor-community/contacts'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contact:any;

  constructor() { }

  ngOnInit() {
  }

  //  loadContact(){
  //   Contacts.getContacts().then(result => {
  //     console.log(result);
  //     this.contact=result.contacts
  //     // for (const contact of result.contacts) {
  //     //     console.log(contact);
  //     // }
  // });
  // }
 

}
