import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth' 
import { CacheService } from '../cacheServices/cache.service'


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    public db: AngularFireDatabase,
    public cacheService: CacheService,
    public afAuth: AngularFireAuth
  ) { 
  }

  getUsers(){
    this.db.list('/users').valueChanges().subscribe(res=>{
      console.log("user fetch success",res)
      this.cacheService.users = res;
    },err=>{
      console.error("user fetch error",err)
    })
  }

}
