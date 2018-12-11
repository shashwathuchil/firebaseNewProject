import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(
    private afAuth:AngularFireAuth,
    private dbf:AngularFireDatabase) { }
  registerUser(value){
    this.afAuth.auth.createUserWithEmailAndPassword(value.email,value.password).then(res=>{
      console.log("register result",res);
      this.saveData(value,res.user.uid);
    }).catch(err=>{
      console.error("register error",err)
    })
  }
  saveData(value, id){
    this.dbf.list('/users/').set(id,value).then(result=>{
      console.log("push successfull",result)
    },(err)=>{
      console.error("push error",err);
    })
  }
}
