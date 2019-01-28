import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StreamCardModule } from '../../core/components/stream-card/stream-card.module';
import { StreamListComponent } from './stream-list.component';

@NgModule({
  declarations: [StreamListComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    MatProgressBarModule,
    ScrollingModule,
    StreamCardModule
  ]
})
export class StreamListModule {
}
