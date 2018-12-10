import { Component, OnInit } from '@angular/core';
import { CacheService } from '../services/cacheServices/cache.service'
import{ SharedService } from '../services/sharedServices/shared.service'

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  public state:any;
  constructor(public cacheService: CacheService, public sharedService: SharedService) {

   }

  ngOnInit() {
    this.state = this.sharedService.states.find(o=>{
      return this.cacheService.driverDetail.address2 == o.key
    })
    console.log("state",this.state)
  }

}
