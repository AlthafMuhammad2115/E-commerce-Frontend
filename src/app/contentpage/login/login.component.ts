import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginMessage: any;
  constructor(private fb:FormBuilder,
    private userserv:UserService,
    private actv:ActivatedRoute,
    private route:Router,
    private toast:ToastrService
    ){};

  reg!:FormGroup;
  submit=false;
  ReturnUrl='';

  ngOnInit(){
    this.reg=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
    this.ReturnUrl=this.actv.snapshot.queryParams.ReturnUrl;

  }

  

  get f(){
     return this.reg.controls;
  }

  onsubmit(){
    this.submit=true;
    if(this.reg.invalid)return;
    console.log("hello")
    let userlog={
      email:this.f.email.value,
      password:this.f.password.value
    }
    console.log(`userlog`,userlog);
    
    // this.userserv.login(userlog)
    // if(this.userserv.IsLogged){
    //   this.route.navigateByUrl('/Home')
    // }

    this.userserv.login(userlog).subscribe(res=>{
      console.log(`response`,res);
      if(res.status===200){
        this.route.navigateByUrl('/Home');
        this.toast.success(res.username+' logged in')
        this.userserv.setUserToLocalStorage('user',res);
        this.userserv.getUserFromLocalStorage('user');
      }else if(res.status===302){
        this.loginMessage=res.result
      }else{
        this.loginMessage=res.result;
      }
       console.log(this.loginMessage);
    })
  }


  IsLogged=this.userserv.IsLogged;

 
}

