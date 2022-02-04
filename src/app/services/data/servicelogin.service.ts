import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {

  constructor() { }
  getUser(): any{
    return firebase.auth().currentUser;
  }
  loginUsers(email: string, password: string): Promise<firebase.auth.UserCredential>{
    return firebase.auth().signInWithEmailAndPassword(email,password);
  }
  singAuth(email: string, password: string): Promise<any>{
    return firebase.auth().createUserWithEmailAndPassword(email,password);
  }
  resetPassword(email: string): Promise<void>{
    return firebase.auth().sendPasswordResetEmail(email);
  }
  logoutUsers(): Promise<void>{
    return firebase.auth().signOut();
  }
}
