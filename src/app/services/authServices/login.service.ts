import { Injectable } from '@angular/core';
import { CacheService } from '../cacheServices/cache.service'
import { AngularFireAuth } from 'angularfire2/auth';
import { SharedService } from '../sharedServices/shared.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private afAuth:AngularFireAuth, 
    public cacheService:CacheService,
    public sharedService:SharedService
    ) {
   }

  loginWithEmail(email,password){
    let self = this;
    this.afAuth.auth.signInWithEmailAndPassword(email,password).then(res=>{
      console.log("res",res);
      self.cacheService.isLogedIn = true;
      this.sharedService.getDrivers()
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
