import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';

var pending=0;

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingserv:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingserv.showloading();
    pending=pending+1;
    return next.handle(request)
    .pipe(
      tap({
        next:(event)=>{
          if(event.type===HttpEventType.Response){
            this.handlehideloading();
          }
        },
        error:(_)=>{
          this.handlehideloading();
        }
      })
    );
  }

  handlehideloading(){
    pending-=1;
    if(pending===0){
      this.loadingserv.hideloading()
    }
  }
}
