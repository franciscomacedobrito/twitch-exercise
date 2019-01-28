import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';
import { SearchBarModule } from '../core/components/search-bar/search-bar.module';
import { StreamCardModule } from '../core/components/stream-card/stream-card.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    LayoutRoutingModule,
    CommonModule,
    MatToolbarModule,
    SearchBarModule,
    StreamCardModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    CommonModule
  ]
})
export class LayoutModule {
}
