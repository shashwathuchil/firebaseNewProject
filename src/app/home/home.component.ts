import { Component, OnInit } from '@angular/core';
import { CacheService } from '../services/cacheServices/cache.service'
import{ LogoutService } from '../services/authServices/logout.service'
import { Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public cacheService:CacheService,
    public logoutService: LogoutService,
    public router: Router
    ) { 
    console.log(this.cacheService.isLogedIn)
  }

  ngOnInit() {
  }
  logout(){
    this.logoutService.logout();
  }
  login(){
    this.router.navigate(['/welcome',{member:0}]);
  }

}
