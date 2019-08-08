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

        this.storage.get('jwt_token').then((val) => {
            if (val) {
                debugger;
                const cloned = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${val}`,
                    }
                });
                return next.handle(cloned);
            }
        });
        return next.handle(req);
    }

    getItem() {
        this.storage.get('jwt_token').then((val) => {
            return val;
        });
    }

}
