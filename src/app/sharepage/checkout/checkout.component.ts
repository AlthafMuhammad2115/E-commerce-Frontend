import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CheckoutService } from 'src/app/service/checkout.service';

declare var Razorpay:any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations:[
      trigger('open',[
        transition(':enter',[
          style({
            opacity:0
          }),
          animate('.2s ease-in',
          style({opacity:1}
          ))
        ])
      ]),
      trigger('close',[
      transition(':leave',[
        style({
          opacity:1
        }),
        animate('0.2s ease-out'
        ,style({opacity:0}
          ))
      ])]
      )
  ]
})
export class CheckoutComponent {

  submit=false;
  postarray:any=[];
  menudata:any=[]
  getid:any;
  address: any=[];
  len: any;
  constructor(private fb:FormBuilder
    ,private act:ActivatedRoute
    ,private serv:ProductService
    ,private userserv:UserService
    ,private toast:ToastrService
    ,private checkoutserv:CheckoutService){
    serv.GetAll().subscribe(res=>{
      this.postarray=res;

      this.getid=act.snapshot.paramMap.get('id');

      if(this.getid){
        this.menudata = this.postarray.filter((value:any) => {
        return value.id == this.getid;
      })
      }

    })

    this.checkoutserv.getAddresss().subscribe(
      (res)=>{
        this.address=res.address;
        this.len=this.address.length;
        
      }
    );
  }


 reg=this.fb.group({
  firstname:['',[Validators.required]],
  lastname:['',[Validators.required]],
  number:['',[Validators.required,Validators.minLength(10)]],
  email:['',[Validators.required,Validators.email]],
  housename:['',[Validators.required]],
  area:['',[Validators.required]],
  place:['',[Validators.required]],
  district:['',[Validators.required]],
  state:['',[Validators.required]],
  pincode:['',[Validators.required]],
})


  
  get f(){
    return this.reg.controls;
  }



  onsubmit(){
    this.submit=true;
    console.log(this.reg.value);
    if(this.reg.valid){
      this.checkoutserv.setAddress(this.reg.value).subscribe(
        ()=>{
          this.toast.success("Address added successfully");
          this.len=this.address.length;
        }
      );
      this.checkoutserv.getAddresss().subscribe(
        (res)=>{
          this.address=res.address
          
        }
      );
    }
  }


  deleteAddress(id:any){
      let Aid={
        addressId:id
      }
      console.log(Aid);
      
    this.checkoutserv.deleteAddress(Aid).subscribe(
      (res)=>{
        console.log(res);
        this.address=res;
        this.toast.success("address deleted successfully");
      }
    );
  }
  
 
  rzp1:any;
  state!:boolean;

  pay(){

    if(this.reg.valid && this.submit){
    this.state=true;
    let options = {
      key: "rzp_test_yzngLCvU4FENyb", 
      amount:this.menudata[0].price*100,
      currency: "INR",
      name: "Godope Clothings",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: "", 
      prefill: {
          name: `${this.f.firstname.value} ${this.f.lastname.value}`,
          email: "gaurav.kumar@example.com",
          contact: "9000090000" 
      },
      notes: {
          address: "Razorpay Corporate Office"
      },
      theme: {
          color: "#3399cc"
      }
  };
  // options end
    
    
    const success=(paymentid:any)=>{
      console.log(paymentid);
    }
    const failure=(e:any)=>{
      console.log(e)
    }

    this.rzp1 = new this.userserv.nativeWindow.Razorpay(options,success,failure);
    this.rzp1.open();
  }else{
    this.toast.warning("Fill the detials","",{
      timeOut:1000,
      positionClass:'toast-top-right'

    })
  }
  // if end
  }


}
