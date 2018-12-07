import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private formBuilder: FormBuilder,public db: AngularFireDatabase) {
    this.loginForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'otp': [null,Validators.required],
      'password': [null,Validators.required],
    });
    var items = db.list('/users').valueChanges();
    console.log(items)
   }

  ngOnInit() {
  }

}
