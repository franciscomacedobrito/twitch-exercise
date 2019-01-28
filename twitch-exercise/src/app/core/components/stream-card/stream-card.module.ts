import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StreamCardComponent } from './stream-card.component';

@NgModule({
  declarations: [StreamCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StreamCardComponent
  ]
})
export class StreamCardModule {
}
