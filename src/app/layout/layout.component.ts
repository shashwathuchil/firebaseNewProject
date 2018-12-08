import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component'
import { LoginComponent } from '../login/login.component'
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  notMember:boolean = true;

  constructor() { }

  ngOnInit() {
  }
  member(){
    this.notMember = !this.notMember;
  }

}
