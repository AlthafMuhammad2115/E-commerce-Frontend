import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CheckoutService } from 'src/app/service/checkout.service';
import { OrdersService } from 'src/app/service/orders.service';

declare var Razorpay: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    trigger('open', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('.2s ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('close', [
      transition(':leave', [
        style({
          opacity: 1,
        }),
        animate('0.2s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CheckoutComponent {
  submit = false;
  postarray: any = [];
  menudata: any = [];
  getid: any;
  address: any = [];
  len: any;

  constructor(
    private fb: FormBuilder,
    private act: ActivatedRoute,
    private serv: ProductService,
    private userserv: UserService,
    private toast: ToastrService,
    private checkoutserv: CheckoutService,
    private route: Router,
    private orderserv: OrdersService
  ) {
    serv.GetAll().subscribe((res) => {
      this.postarray = res;

      this.getid = act.snapshot.paramMap.get('id');

      if (this.getid) {
        this.menudata = this.postarray.filter((value: any) => {
          return value.id == this.getid;
        });
      }
    });

    this.checkoutserv.getAddresss().subscribe((res) => {
      this.address = res.address;
      this.len = this.address.length;
    });
  }

  reg = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    number: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    pincode: ['', [Validators.required]],
  });

  get f() {
    return this.reg.controls;
  }

  onsubmit() {
    this.submit = true;
    console.log(this.reg.value);
    if (this.reg.valid) {
      this.checkoutserv.setAddress(this.reg.value).subscribe(() => {
        this.toast.success('Address added successfully');
        this.len = this.address.length;
      });
      this.checkoutserv.getAddresss().subscribe((res) => {
        this.address = res.address;
      });
    }
  }

  deleteAddress(id: any) {
    let Aid = {
      addressId: id,
    };
    console.log(Aid);

    this.checkoutserv.deleteAddress(Aid).subscribe((res) => {
      console.log(res);
      this.address = res;
      this.toast.success('address deleted successfully');
    });
  }

  rzp1: any;
  state!: boolean;
  public orderId: any;

  pay() {
    // Ensure the form is valid and submission is allowed before proceeding
    if (this.reg.valid && this.submit) {
      this.state = true;

      // Create an order through the order service
      this.orderserv.order({ amount: this.menudata[0].price * 100 }).subscribe(
        (res) => {
          // Retrieve the order ID from the response
          this.orderId = res;
          this.orderId = this.orderId.order_id;
          // this.orderId = res.order_id;
          console.log('Order ID:', this.orderId);

          // Prepare the Razorpay options with the order details
          const options = {
            key: 'rzp_test_l2EHS214It8uXe',
            amount: this.menudata[0].price * 100,
            currency: 'INR',
            name: 'Godope Clothings',
            description: 'Test Transaction',
            order_id: this.orderId,
            callback_url: 'https://godope-a-clothing-website.vercel.app/orders',
            prefill: {
              name: `${this.f.firstname.value} ${this.f.lastname.value}`,
              email: this.f.email.value,
              contact: this.f.number.value,
            },
            theme: {
              color: '#3399cc',
            },
            handler: (response: any) => {
              console.log('Payment response:', response);

              // Prepare the order details for verification
              const orderDetails = {
                productId: this.menudata[0].id,
                orderId: this.orderId,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                address:this.f.address.value,
                phone:this.f.number.value,
                delivery_date:Date.now(),
                size:"XL"
              };

              // Verify the order with the server
              this.orderserv.verifyOrder(orderDetails).subscribe((res) => {
                console.log('Order verification response:', res);
                this.route.navigateByUrl('/orders');
              });
            },
          };

          // Initialize the Razorpay payment window with the options
          this.rzp1 = new this.userserv.nativeWindow.Razorpay(options);

          // Handle payment failure
          this.rzp1.on('payment.failed', (response: any) => {
            alert(response.error.code);
          });

          // Open the Razorpay payment window
          this.rzp1.open();
        },
        (error) => {
          console.error('Order creation error:', error);
          // Handle order creation error here
        }
      );
    } else {
      // Show a warning if the form is not valid or submission is not allowed
      this.toast.warning('Fill in the details', '', {
        timeOut: 1000,
        positionClass: 'toast-top-right',
      });
    }
  }
}
