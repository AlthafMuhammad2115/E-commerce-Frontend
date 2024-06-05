import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { valHooks } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/product.service';
import { AdminService } from 'src/app/service/admin.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})

export class AddProductsComponent {
  sizechart = ['S', 'M', 'L', 'XL', 'XXL'];
  category = ['Men', 'Women', 'Kid'];
  product: any;
  productDet: any;
  file!:File

  constructor(
    private fb: FormBuilder,
    private productserv: ProductService,
    private toast: ToastrService,
    private acRoute: ActivatedRoute,
    private adminserv:AdminService,
    private route:Router
  ) {}

  
  ngOnInit(){
    this.productDet = this.fb.group({
      name: ['', Validators.required],
      imgName: [this.file],
      price: ['', Validators.required],
      desc: ['', Validators.required],
      shortDesc: ['', Validators.required],
      stock: ['', Validators.required],
      size: [[], Validators.required],
      category: ['', Validators.required],
    });


    if(this.acRoute.snapshot.routeConfig?.path=='editProducts'){
      this.adminserv.getinfo().subscribe(res=>{
        this.product=res;
      })
      this.productDet.setValue({
        name:this.product.name,
        imgName:null,
        price: this.product.price,
        desc: this.product.desc,
        shortDesc: this.product.shortDesc,
        stock: this.product.stock,
        size: this.product.size,
        category: this.product.category
      })
      
    }

  }

  onsubmit() {
    if (this.productDet.invalid) return;

    const productData = new FormData();
    productData.append("name",this.productDet.value.name);
    productData.append("imgName",this.file);
    productData.append("price",this.productDet.value.price);
    productData.append("desc",this.productDet.value.desc);
    productData.append("shortDesc",this.productDet.value.shortDesc);
    productData.append("stock",this.productDet.value.stock);
    productData.append("size",this.productDet.value.size);
    productData.append("category",this.productDet.value.category);
    console.log(productData);
    let data:any = {};
    productData.forEach((value,key) => (data[key] = value));
  // Log the data.
  console.log("data",data);
    if (this.acRoute.snapshot.routeConfig?.path == 'addProducts') {
      console.log(this.productDet.value);
      
      this.productserv.SetProduct(productData).subscribe(() => {
        console.log("added");
        
        this.toast.success('Item Added Successfully');
        this.route.navigateByUrl('/admin')

      });
    } else {
      this.productserv.EditProducts(this.product.id,this.productDet.value).subscribe(res=>{
        this.toast.success('Item Updated Successfully');
        this.route.navigateByUrl('/admin')
      });
    }
  }

  
  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

  
}
