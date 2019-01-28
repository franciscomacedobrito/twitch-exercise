import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stream } from '../../models/stream.model';

@Component({
  selector: 'stream-card',
  templateUrl: './stream-card.component.html',
  styleUrls: ['./stream-card.component.scss']
})
export class StreamCardComponent implements OnInit {

  constructor(private router: Router) {
  }

  @Input() stream: Stream;

  ngOnInit() {
    this.stream.sanitizedThumbnailUrl = this.sanitizeThumbnailUrl(this.stream.preview.template);
  }

  public openStream() {
    this.router.navigate(['watch'], { queryParams: { channel: this.stream.channel.name } });
  }

  private sanitizeThumbnailUrl(url: string): string {
    const widthFlag = '{width}';
    const heightFlag = '{height}';
    return url.replace(widthFlag, '350').replace(heightFlag, '220');
  }

}
