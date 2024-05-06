import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/service/admin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  reg!:FormGroup;
  submit=false;
  ReturnUrl='';
  isAdminLogged: boolean=false;
  loginMessage: any;

  constructor(private fb:FormBuilder,private adminserv:AdminService,private toast:ToastrService,private userserv:UserService,private route:Router){}

  ngOnInit(){
    this.reg=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
    this.isAdminLogged=this.userserv.getUserFromLocalStorage("admin")
  }

  

  get f(){
     return this.reg.controls;
  }

  onsubmit(){
    this.submit=true;
    if(this.reg.invalid)return;
    let userlog={
      email:this.f.email.value,
      password:this.f.password.value
    }
    this.adminserv.AdminLogIn(userlog).subscribe(
      (res)=>{
        console.log(res);
        this.loginMessage=res.result;

        this.userserv.setUserToLocalStorage("admin",res);
        this.isAdminLogged=this.userserv.getUserFromLocalStorage("admin").userId;
        if(this.userserv.getUserFromLocalStorage("admin").userId){
          this.toast.success(res.username+" logged successfully");
        }
      }
    )
  }

  
removeadmin(){
  this.userserv.removeUserFromLocalStorage("admin");
  this.isAdminLogged=this.userserv.getUserFromLocalStorage("admin");
}
}
