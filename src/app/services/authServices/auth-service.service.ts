import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor(private afAuth:AngularFireAuth) { }
  registerUser(value){
    this.afAuth.auth.createUserWithEmailAndPassword(value.email,value.password).then(res=>{
      console.log("register result",res);
    }).catch(err=>{
      console.error("register error",err)
    })
  }
}
