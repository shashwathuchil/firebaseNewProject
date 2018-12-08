import { Injectable } from '@angular/core';
import { CacheService } from '../cacheServices/cache.service'
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public cacheService:CacheService
  constructor(private afAuth:AngularFireAuth) {
   }

  loginWithEmail(email,password){
    let self= this.cacheService;
    this.afAuth.auth.signInWithEmailAndPassword(email,password).subscribe(res=>{
      
    })
    // .then(res=>{
    //   self.
    //    = true;
    //   console.log("login successfull",res);
    // }).catch(err=>{
    //   console.error("login error",err)
    // });
  }
  loginWithMobile(value, appverifier){
    this.cacheService.enableOtp = true;
  }
  loginWithUserName(value){

  }
}
