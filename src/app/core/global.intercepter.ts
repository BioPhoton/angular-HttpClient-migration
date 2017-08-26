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
    const transformedReq = this.transformRequest(req)
    return delegate.handle(transformedReq)
  }

  transformRequest(req: HttpRequest<any>): HttpRequest<any> {

    const options: any = {}

    if (req.method === 'post') {
      // transform request here
      // options.setHeaders = {'Content-Type': 'multipart/form-data'}
    }

    return Object.keys(options).length ? req.clone(options) : req
  }

}

export const GLOBAL_INTERCEPTER_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: GlobalInterceptor,
  multi: true,
}
