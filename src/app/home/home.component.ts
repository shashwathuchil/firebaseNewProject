import { Component, OnInit } from '@angular/core';
import { CacheService } from '../services/cacheServices/cache.service'
import{ LogoutService } from '../services/authServices/logout.service'
import { Router } from '@angular/router';
import{ FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { SharedService } from '../services/sharedServices/shared.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public driversRegister: FormGroup;
  constructor(
    public cacheService:CacheService,
    public logoutService: LogoutService,
    public router: Router,
    public formBuilder: FormBuilder,
    public sharedService: SharedService
    ) { 
      this.driversRegister = this.formBuilder.group({
        'fName': [null, Validators.required],
        'lName': [null, Validators.required],
        'pic':[null,Validators.required],
        'role': [null, Validators.required],
        'dob': [null, Validators.required],
        'mStatus':[null, Validators.required],
        'phone': [null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        'aPhone': [null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        'address': [null,Validators.required],
        'address2': [null, Validators.required]
      });
    console.log("is logged in",this.cacheService.isLogedIn)
  }

  ngOnInit() {
  }
  logout(){
    this.logoutService.logout();
  }
  login(){
    this.router.navigate(['/welcome',{member:0}]);
  }
  onSubmit(value,valid){
    if (valid){
      console.log("form value",value)
      this.sharedService.pushDrivers(value);
      this.driversRegister.reset();
    }
  }
  expantDriver(data){
    console.log(data);
    this.router.navigate(['/driverDetail']);
    this.cacheService.driverDetail = data;
  }

}
