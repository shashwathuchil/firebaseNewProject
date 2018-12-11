import { Component, OnInit, Input } from '@angular/core';
import { CacheService } from '../services/cacheServices/cache.service'
import { LogoutService } from '../services/authServices/logout.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { SharedService } from '../services/sharedServices/shared.service'

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {

  public driversRegister: FormGroup;
  private fname: string = null;
  private lname: string = null;
  private pic: string= null;
  private role: string = null;
  private dob: Date = null;
  private mStatus: string = null;
  private phone: Number = null;
  private aPhone: Number = null;
  private address: string = null;
  private address2: string = null;
  // public driverEdit: Boolean = true;
  constructor(
    public cacheService: CacheService,
    public logoutService: LogoutService,
    public router: Router,
    public formBuilder: FormBuilder,
    public sharedService: SharedService
  ) {
    // console.log("edit status",this.cacheService.driverDetail.value.fname)
    if (this.cacheService.driverDetail) {
      this.fname = this.cacheService.driverDetail.value.fName;
      this.lname = this.cacheService.driverDetail.value.lName
      // this.pic = this.cacheService.driverDetail.value.pic;
      this.role = this.cacheService.driverDetail.value.role;
      this.dob = this.cacheService.driverDetail.value.dob;
      this.mStatus = this.cacheService.driverDetail.value.mStatus;
      this.phone = this.cacheService.driverDetail.value.phone;
      this.aPhone = this.cacheService.driverDetail.value.aPhone;
      this.address = this.cacheService.driverDetail.value.address;
      this.address2 = this.cacheService.driverDetail.value.address2;
    }
    this.driversRegister = this.formBuilder.group({
      'fName': [this.fname, Validators.required],
      'lName': [this.lname, Validators.required],
      'pic': [this.pic, Validators.required],
      'role': [this.role, Validators.required],
      'dob': [this.dob, Validators.required],
      'mStatus': [this.mStatus, Validators.required],
      'phone': [this.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'aPhone': [this.aPhone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'address': [this.address, Validators.required],
      'address2': [this.address2, Validators.required]
    });
    console.log("is logged in", this.cacheService.isLogedIn)
  }

  ngOnInit() {
  }
  logout() {
    this.logoutService.logout();
  }
  onSubmit(value, valid) {
    if (valid) {
      console.log("form value", value)
      this.sharedService.pushDrivers(value);
      this.driversRegister.reset();
    }
  }


}
