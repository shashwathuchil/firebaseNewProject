import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { CacheService } from '../cacheServices/cache.service'

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    public afAuth: AngularFireAuth,
    public cacheService:CacheService
  ) { }
  logout(){
    this.afAuth.auth.signOut().catch(res=>{
      console.log("logged out",res)
    }).catch(err=>{
      console.error("error while logout",err)
    })
    this.cacheService.clearCache();
  }
}
