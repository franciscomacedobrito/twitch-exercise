import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastNotificationService } from '../components/toast-notification/toast-notification.service';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private router: Router,
              private toastNotificationService: ToastNotificationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(catchError((error) => {
      return this.handleError(error);
    }));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    this.toastNotificationService.error(error.error.error);
    return of(error.message);
    throw error;
  }
}
