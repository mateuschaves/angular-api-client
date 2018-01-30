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
            headers: req.headers.set("Authorization", "Bearer "  + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE1MTcyOTcxOTQsImV4cCI6MTUxNzMyNzE5NCwibmJmIjoxNTE3Mjk3MTk0LCJqdGkiOiJKVUxMbk90WGk4S0VvTWRyIiwic3ViIjoyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.ngpbRMXFtchrlUbi2EPDG3z4S7iJvPFAWrTs4kcN0cE"),
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


