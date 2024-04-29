import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('login') || req.url.includes('register')  ) {
            console.log("ABHAY")
            return next.handle(req);
        }
       
            // add token
            let authReq = req;
            const token = localStorage.getItem('token');
            const role = localStorage.getItem('role');
            console.log(role);
            if (token != null) {
                console.log("Hello TOken")
                authReq = authReq.clone({ setHeaders: { Authorization: `Bearer ${token}` ,role :`${role}` } });
                console.log(authReq);
            }   

            return next.handle(authReq);
        
    }
}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
]