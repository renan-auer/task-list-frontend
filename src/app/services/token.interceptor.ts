import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EventEmitterService } from '../services/event-emitter';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
      private router: Router, 
      private EventService: EventEmitterService,
      ) { }

    url: String = '';

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
                this.EventService.get('loader').emit(true);
            return event;
        }, (err) => {
            this.EventService.get('loader').emit(false);
            let currentRoute = this.router.url;
        }, () => this.EventService.get('loader').emit(false)));
    }
}