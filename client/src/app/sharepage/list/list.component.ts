import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public vis:any;
  men=false;
  women=false;
  kids=false;
  clicklist1(){
    this.men= !this.men;
   
  }
  clicklist2(){
    this.women= !this.women;
  }
  clicklist3(){
    this.kids= !this.kids;
  }
  
  rotate1(){
    if(this.men==true){
      return "rotate(90deg)";
    }else{
      return "rotate(360deg)"
    }
    
  }
  rotate2(){
    if(this.women==true){
      return "rotate(90deg)";
    }else{
      return "rotate(360deg)"
    }
    
  }
  rotate3(){
    if(this.kids==true){
      return "rotate(90deg)";
    }else{
      return "rotate(360deg)"
    }
    
  }
}
