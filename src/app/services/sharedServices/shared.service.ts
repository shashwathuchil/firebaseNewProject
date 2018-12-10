import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'
import { CacheService } from '../cacheServices/cache.service'


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public states: any;
  constructor(
    public db: AngularFireDatabase,
    public cacheService: CacheService,
    public afAuth: AngularFireAuth
  ) {
    this.states = [
      {
        "key": "AN",
        "name": "Andaman and Nicobar Islands"
      },
      {
        "key": "AP",
        "name": "Andhra Pradesh"
      },
      {
        "key": "AR",
        "name": "Arunachal Pradesh"
      },
      {
        "key": "AS",
        "name": "Assam"
      },
      {
        "key": "BR",
        "name": "Bihar"
      },
      {
        "key": "CG",
        "name": "Chandigarh"
      },
      {
        "key": "CH",
        "name": "Chhattisgarh"
      },
      {
        "key": "DH",
        "name": "Dadra and Nagar Haveli"
      },
      {
        "key": "DD",
        "name": "Daman and Diu"
      },
      {
        "key": "DL",
        "name": "Delhi"
      },
      {
        "key": "GA",
        "name": "Goa"
      },
      {
        "key": "GJ",
        "name": "Gujarat"
      },
      {
        "key": "HR",
        "name": "Haryana"
      },
      {
        "key": "HP",
        "name": "Himachal Pradesh"
      },
      {
        "key": "JK",
        "name": "Jammu and Kashmir"
      },
      {
        "key": "JH",
        "name": "Jharkhand"
      },
      {
        "key": "KA",
        "name": "Karnataka"
      },
      {
        "key": "KL",
        "name": "Kerala"
      },
      {
        "key": "LD",
        "name": "Lakshadweep"
      },
      {
        "key": "MP",
        "name": "Madhya Pradesh"
      },
      {
        "key": "MH",
        "name": "Maharashtra"
      },
      {
        "key": "MN",
        "name": "Manipur"
      },
      {
        "key": "ML",
        "name": "Meghalaya"
      },
      {
        "key": "MZ",
        "name": "Mizoram"
      },
      {
        "key": "NL",
        "name": "Nagaland"
      },
      {
        "key": "OR",
        "name": "Odisha"
      },
      {
        "key": "PY",
        "name": "Puducherry"
      },
      {
        "key": "PB",
        "name": "Punjab"
      },
      {
        "key": "RJ",
        "name": "Rajasthan"
      },
      {
        "key": "SK",
        "name": "Sikkim"
      },
      {
        "key": "TN",
        "name": "Tamil Nadu"
      },
      {
        "key": "TS",
        "name": "Telangana"
      },
      {
        "key": "TR",
        "name": "Tripura"
      },
      {
        "key": "UP",
        "name": "Uttar Pradesh"
      },
      {
        "key": "UK",
        "name": "Uttarakhand"
      },
      {
        "key": "WB",
        "name": "West Bengal"
      }
    ]
  }

  getUsers() {
    this.db.list('/users').valueChanges().subscribe(res => {
      console.log("user fetch success", res)
      this.cacheService.users = res;
    }, err => {
      console.error("user fetch error", err)
    })
  }
  pushDrivers(value){
    const items = this.db.list('/driversList');
    items.push(value);
  }
  getDrivers(){
    this.db.list('/driversList').valueChanges().subscribe(res => {
      console.log("driversList fetch success", res)
      this.cacheService.drivers = res;
    }, err => {
      console.error("driversList fetch error", err)
    })
  }

}
