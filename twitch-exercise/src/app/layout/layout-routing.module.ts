import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'search', loadChildren: '../pages/stream-list/stream-list.module#StreamListModule',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LayoutRoutingModule {
}
