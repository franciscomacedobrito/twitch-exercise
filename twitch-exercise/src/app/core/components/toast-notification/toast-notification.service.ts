import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { ToastNotificationComponent } from './toast-notification.component';

@Injectable()
export class ToastNotificationService {

  constructor(private snackBar: MatSnackBar, private readonly zone: NgZone) {
  }

  info(message: string): void {
    this.zone.run(() => {
      this.snackBar.openFromComponent(ToastNotificationComponent, {
        data: { text: message, type: 'info', icon: 'info' },
        panelClass: 'info--background',
        duration: 3000
      });
    });
  }

  success(message: string): void {
    this.zone.run(() => {
      this.snackBar.openFromComponent(ToastNotificationComponent, {
        data: { text: message, type: 'success', icon: 'done' },
        panelClass: 'success--background',
        duration: 3000
      });
    });
  }

  error(message: string): void {
    this.zone.run(() => {
      this.snackBar.openFromComponent(ToastNotificationComponent, {
        data: { text: message, type: 'error', icon: 'error' },
        panelClass: 'error--background',
        duration: 3000
      });
    });
  }

}
