import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  signupMessage: String='';
  constructor(private fb: FormBuilder, private userserv: UserService,private actv:ActivatedRoute,private route:Router) { }
  reg!: FormGroup;
  submit = false;
  ReturnUrl="/login";
  ngOnInit() {
    this.reg = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    })
    this.ReturnUrl=this.actv.snapshot.queryParams.ReturnUrl;

  }
  get f() {
    return this.reg.controls;

  }
  notsame=false;
  onsubmit() {

    this.submit = true;

    if (this.reg.invalid) return;

    if(this.f.password.value!=this.f.confirmPassword.value) {

      this.notsame=true;
      return;
    }
    this.userserv.signup({ username: this.f.username.value
      , email: this.f.email.value
      , password: this.f.password.value }).subscribe( (res)=> {
          if(res.status===200){
            this.route.navigateByUrl('/login')
          }else if(res.status===302){
            this.signupMessage=res.message;
          }
            
    })


  }
}
