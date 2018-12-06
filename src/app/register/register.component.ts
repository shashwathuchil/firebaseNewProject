import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  
  constructor(private formBuilder: FormBuilder,public db: AngularFireDatabase) { 
    this.registerForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'email': [null,Validators.required],
      'sex': [null,Validators.required],
      'phone': [null,Validators.required],
      'userName': [null, Validators.required],
      'age': [null,Validators.required],
      'password': [null,Validators.required],
      'confirmPassword': [null,Validators.required],
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
    const items = this.db.list('/users');
    delete value.confirmPassword;
    items.push(value);
    this.registerForm.reset();
    
  }

}
