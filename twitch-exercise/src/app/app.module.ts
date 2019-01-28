import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastNotificationComponent } from './core/components/toast-notification/toast-notification.component';
import { ToastNotificationService } from './core/components/toast-notification/toast-notification.service';
import { RequestInterceptorService } from './core/interceptors/request-interceptor.service';
import { CommonsService } from './core/services/commons.service';
import { StreamService } from './core/services/stream.service';
import { LayoutModule } from './layout/layout.module';
import { StreamListModule } from './pages/stream-list/stream-list.module';
import { StreamViewModule } from './pages/stream-view/stream-view.module';

@NgModule({
  declarations: [
    AppComponent,
    ToastNotificationComponent
  ],
  entryComponents: [
    ToastNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    LayoutModule,
    StreamListModule,
    StreamViewModule
  ],

  providers: [
    StreamService,
    ToastNotificationService,
    CommonsService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
