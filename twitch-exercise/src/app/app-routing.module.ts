import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { StreamListComponent } from './pages/stream-list/stream-list.component';
import { StreamViewComponent } from './pages/stream-view/stream-view.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'search', component: StreamListComponent,
      },
      {
        path: 'watch', component: StreamViewComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
