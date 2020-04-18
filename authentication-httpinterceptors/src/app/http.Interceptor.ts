import { HttpInterceptor,HttpHandler,HttpEvent,HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import {Observable} from 'rxjs'
import  'rxjs/add/operator/do'
import { Injectable } from '@angular/core'

@Injectable()
export class MyInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone({
          setHeaders:{
              myheader:'kiran'
          }
      });
      return next.handle(req);
    }
   
}