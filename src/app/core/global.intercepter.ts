import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTED :-)')
    return delegate.handle(req)
  }
}

export const GLOBAL_INTERCEPTER_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: GlobalInterceptor,
  multi: true,
}
