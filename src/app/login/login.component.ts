import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthServiceService } from '../services/authServices/auth-service.service'
import { CacheService } from '../services/cacheServices/cache.service'
import { LoginService } from '../services/authServices/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  mobileLogin: Boolean = false;
  usernameLogin: Boolean = false;
  emailLogin: Boolean = false;
  recaptchaVerifier:any;
  // public firebase:any = firestore;

  constructor(private formBuilder: FormBuilder,
    public db: AngularFireDatabase,
    public authService: AuthServiceService,
    public cacheService: CacheService,
    public loginService:LoginService,
    public router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      'uName': [null, Validators.required],
      'otp': [null, Validators.required],
      'password': [null, Validators.required],
    });
    var items = db.list('/users').valueChanges();
    console.log(items)
  }

  ngOnInit() {
    // this.recaptchaVerifier =this.firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  onSubmit(formVal) {
    var isNum = /^\d+$/.test(formVal.value.uName);
    var isEmail = /\S+@\S+/.test(formVal.value.uName);
    console.log("name type", formVal, isNum, isEmail)
    if (isNum) {
      this.mobileLogin = true;
      this.loginService.loginWithMobile(formVal.value.uName,this.recaptchaVerifier);
    }
    else if (isEmail) {
      this.emailLogin = true;
      this.loginService.loginWithEmail(formVal.value.uName, formVal.value.password);
      this.router.navigate(['/home']);
    }
    else {
      this.usernameLogin = true;
      this.loginService.loginWithUserName(formVal.value.uName);
    }
  }

}
