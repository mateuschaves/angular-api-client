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
            headers: req.headers.set("Authorization", "Bearer "  + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE1MTcwMjMwNDIsImV4cCI6MTUxNzA1MzA0MiwibmJmIjoxNTE3MDIzMDQyLCJqdGkiOiI0YWNTNk5tYUQyMGZhTmF4Iiwic3ViIjo0MCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.rnmYv1W6Uuthef-dryG2-RhHmOnEwF7WJjv-6fB_abk"),
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


