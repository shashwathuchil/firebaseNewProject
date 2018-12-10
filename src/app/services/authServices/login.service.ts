import { Injectable } from '@angular/core';
import { CacheService } from '../cacheServices/cache.service'
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private afAuth:AngularFireAuth, 
    public cacheService:CacheService,
    ) {
   }

  loginWithEmail(email,password){
    let self = this;
    this.afAuth.auth.signInWithEmailAndPassword(email,password).then(res=>{
      console.log("res",res);
      self.cacheService.isLogedIn = true;
    }).catch(err=>{
      console.error("error",err)
    });
    
    
  }
  loginWithMobile(value, appverifier){
    this.cacheService.enableOtp = true;
  }
  loginWithUserName(value){

  }
}
