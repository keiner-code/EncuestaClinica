import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Talleres } from 'src/app/talleres';
import { Pacientes } from 'src/app/pacientes';
import { Pacientescriticos } from 'src/app/pacientescriticos';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore, public http: HttpClient) { }

   crearUsuarios(usersName: string, secondName: string, ageUsers: string, phoneUsers: string, directionUsers: string
                 , statusUsers: string, profeUsers: string , estractoUsers: string, cargoUsers: string, horasTrabajadas: string
                 , cantidadAlimento: string, nivelEstudio: string): Promise<void>{
      const id = this.firestore.createId();
      return this.firestore.doc(`usersList/${id}`).set({id,usersName,secondName,ageUsers,phoneUsers,directionUsers
                                                        ,statusUsers,profeUsers,estractoUsers,cargoUsers,horasTrabajadas
                                                        ,cantidadAlimento,nivelEstudio});
   }
   crearTalleres(tallerName: string, horaTaller: string, expertoTaller: string, precioTaller: string): Promise<void>{
     const id = this.firestore.createId();
     return this.firestore.doc(`DatosTaller/${id}`).set({id,tallerName,horaTaller,expertoTaller,precioTaller});
   }
   obtenerListaTalleres(): AngularFirestoreCollection<Talleres>{
      return this.firestore.collection(`DatosTaller`);
   }
   obtenerDetallesTaller(id): AngularFirestoreDocument<Talleres>{
     return this.firestore.collection(`DatosTaller`).doc(id);
   }
   agregarEncuesta(username: string ,password: string,status: string): Promise<void>{
     const id = this.firestore.createId();
     return this.firestore.doc(`UsersEncuesta/${id}`).set({username,password,status});
   }
   agregarEncuestaPaciente(username: string ,password: string,taller: string): Promise<void>{
    const id = this.firestore.createId();
    return this.firestore.doc(`UsersEncuestaPaciente/${id}`).set({username,password,taller});
  }
  obtenerListaTalleresPacientes(): AngularFirestoreCollection<Pacientes>{
    return this.firestore.collection(`UsersEncuestaPaciente`);
 }
 obtenerListaPacientesCriticos(): AngularFirestoreCollection<Pacientescriticos>{
  return this.firestore.collection(`UsersEncuesta`);
}
obtenerApiPaciente(): Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}
}
