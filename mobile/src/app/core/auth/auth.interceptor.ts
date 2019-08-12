import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent }
    from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private readonly storage: Storage) { }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        if (localStorage.getItem('jwt_token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
                },
            });
        }

        return next.handle(req);
    }
     
}
