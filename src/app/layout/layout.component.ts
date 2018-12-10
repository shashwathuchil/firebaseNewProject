import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component'
import { LoginComponent } from '../login/login.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  notMember:boolean = true;

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((res)=>{
      console.log("result",res)
      if(res.member == "true"){
        this.notMember = true;
      }
      else{
        this.notMember = false;
      }
    },(err)=>{
      console.error("error",err)
    })
  }
  member(){
    this.notMember = !this.notMember;
  }

}
