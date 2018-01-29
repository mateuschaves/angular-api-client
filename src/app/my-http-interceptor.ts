import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercepted request ... ");

        const authReq = req.clone({
            headers: req.headers.set("Authorization", "Bearer "  + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE1MTcyMDY1MzIsImV4cCI6MTUxNzIzNjUzMiwibmJmIjoxNTE3MjA2NTMyLCJqdGkiOiJKdTlMeUhpdnB5RFV2dTE4Iiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.BYww0MWrIXx8kfFj43_ZF9Nf4U7xA9ejbboQAfgEwO0"),
        });

        console.log("Sending request with new header now ...");

        return next.handle(authReq)
        .catch((error, caught) => {
            //intercept the respons error and displace it to the console
            console.log("Error Occurred");
            console.log(error);
            //return the error to the method that called it
            return Observable.throw(error);
            }) as any;
            }
    }


