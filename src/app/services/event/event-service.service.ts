import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { ServiceloginService } from '../data/servicelogin.service';
import { DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  public listRefEvento: firebase.firestore.CollectionReference;
  constructor(private aS: ServiceloginService) { }

  async createEvent(evenName: string
                  , eventDate: string
                  , eventPrice: number
                  , eventCost: number): Promise<DocumentReference>{
    const user: firebase.User = await this.aS.getUser();
    this.listRefEvento = firebase.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.listRefEvento.add({
      name: evenName,
      date: eventDate,
      price: eventPrice*1,
      cost: eventCost*1,
      revenue: eventCost*-1,
    });
  }
  getEventList(): Promise<firebase.firestore.QuerySnapshot>{
    const user: firebase.User = this.aS.getUser();
    this.listRefEvento = firebase.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.listRefEvento.get();
  }
  getEventDetail(eventId: string): Promise<firebase.firestore.QueryDocumentSnapshot>{
    const user: firebase.User = this.aS.getUser();
    this.listRefEvento = firebase.firestore().collection(`userProfile/${user.uid}/eventList`);
    return this.listRefEvento.doc(eventId).get();
  }

  async addInvitado(nombreInvitado: string, idEvento: string, precioEvento: number){
    return this.listRefEvento.doc(idEvento).collection('eventList').add({nombreInvitado}).then((nuevoInvitado) => {
      return firebase.firestore().runTransaction(transaction => {
        return transaction.get(this.listRefEvento.doc(idEvento)).then(eventDoc =>{
          const nuevoIngreso = eventDoc.data().revenue + precioEvento;
          transaction.update(this.listRefEvento.doc(idEvento), {revenue: nuevoIngreso});
        });
      });
    });
  }
}
