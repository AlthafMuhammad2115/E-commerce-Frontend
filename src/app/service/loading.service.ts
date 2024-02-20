import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isloading=new BehaviorSubject<boolean>(false);
  constructor() { }

  showloading(){
    this.isloading.next(true);
  }
  hideloading(){
    this.isloading.next(false);
  }
  get load(){
    return this.isloading.asObservable();
  }
}
