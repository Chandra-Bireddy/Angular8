import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts:Contact[];
  constructor() {
    this.contacts=[
      {contactID:101,firstName:"Chandra",lastName:"Bireddy",dob:new Date("1998-03-05"),mobileNumber:"9955650397",alternateMobileNumber:"19703606830",mailId:"cbrh1@gmail.com",organization:"Shade"},
      {contactID:102,firstName:"Hari",lastName:"Bireddy",dob:new Date("1997-03-05"),mobileNumber:"9951546397",alternateMobileNumber:"29703606830",mailId:"cbrh2@gmail.com",organization:"Shade1"},
      {contactID:103,firstName:"Lucky",lastName:"Isani",dob:new Date("1996-03-05"),mobileNumber:"9951555397",alternateMobileNumber:"39703606830",mailId:"cbrh3@gmail.com",organization:"Shade3"}
    ];
   }
   getAll():Contact[]{
     return this.contacts;
   }
   get(id:number){
     return this.contacts.find((c)=>(c.contactID==id));
   }
   add(contact:Contact){
     this.contacts.push(contact);
   }
   update(contact:Contact){
    let index=this.contacts.findIndex((c)=>(c.contactID===contact.contactID));
    if(index>-1){
      this.contacts[index]=contact;
    }
   }
   delete(id:number){
     let index=this.contacts.findIndex((contact)=>(contact.contactID===id));
     if(index>-1){
      this.contacts.splice(index,1);
    }
   }
}
