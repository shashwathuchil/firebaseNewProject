import { Component, OnInit } from '@angular/core';
import { CacheService } from '../services/cacheServices/cache.service'
import{ SharedService } from '../services/sharedServices/shared.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  public state:any;
  constructor(
    public cacheService: CacheService, 
    public sharedService: SharedService,
    public router: Router,
    ) {

   }

  ngOnInit() {
    if(this.cacheService.isLogedIn){
      this.state = this.sharedService.states.find(o=>{
        return this.cacheService.driverDetail.address2 == o.key
      })
    }
    console.log("state",this.state)
  }
  login(){
    this.router.navigate(['/welcome',{member:0}]);
  }

}
