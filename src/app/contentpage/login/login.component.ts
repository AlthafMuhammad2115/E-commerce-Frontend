import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,
    private userserv:UserService,
    private actv:ActivatedRoute,
    private route:Router,
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
    
    this.userserv.login({email:this.f.email.value,password:this.f.password.value}).subscribe(res=>{
      console.log(res+"res");
      
      if(res.status===302){
        alert('login success')
      this.route.navigateByUrl('/Men')
      console.log("worked");
      
      }else{
        alert('login failed')
      }
        
      })
  }

}
