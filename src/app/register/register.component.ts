import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthServiceService } from '../services/authServices/auth-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    public db: AngularFireDatabase, 
    public authService:AuthServiceService,
  ) { 
    this.registerForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'email': [null,[Validators.required,Validators.email]],
      'sex': [null,Validators.required],
      'phone': [null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      'userName': [null, Validators.required],
      'age': [null,Validators.required],
      'password': [null,[Validators.required,Validators.minLength(6)]],
      'confirmPassword': [null,[Validators.required]],
    });
    var items = db.list('/users').valueChanges();
    console.log(items)
    console.log("registerform",this.registerForm)
  }

  ngOnInit() {
  }

  onSubmit(value,valid){
    console.log("value",value);
    console.log("validation",valid);
    delete value.confirmPassword;
    this.authService.registerUser(value);
    this.registerForm.reset();
  }

}
