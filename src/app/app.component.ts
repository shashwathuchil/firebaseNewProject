import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { RegisterComponent } from './register/register.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firebaseNewProject';
  users:any=[];
  // public fireOb: AngularFireObservable;
  constructor(
    db: AngularFireDatabase
  ){
    db.list('/users').valueChanges().subscribe(res=>{
      this.users = res;
      console.log(this.users);
    })
    
  }
}
