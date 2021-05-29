import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'cc4cc145a5msh48f5e83acc86716p1a569fjsn1aeaabe25e31',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key:'609bec92a3d147b78625e1f25c79e2a2'
            }  
        })
        return next.handle(req)

    }
}
