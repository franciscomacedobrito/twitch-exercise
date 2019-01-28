import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  templateUrl: './toast-notification.component.html'
})
export class ToastNotificationComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

}
