import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { LogoutService } from './services/authServices/logout.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firebaseNewProject';
  users:any=[];
  constructor(public logoutService:LogoutService){
    this.logoutService.isLoggedOut();
  }
}
