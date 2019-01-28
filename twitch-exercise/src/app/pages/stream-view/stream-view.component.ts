import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stream-view',
  templateUrl: './stream-view.component.html',
  styleUrls: ['./stream-view.component.scss']
})
export class StreamViewComponent implements OnInit {
  private trustedUrl: SafeUrl;
  private routeParams: Params;

  constructor(private sanitizer: DomSanitizer,
              private activeRoute: ActivatedRoute) {
    this.routeParams = this.activeRoute.snapshot.queryParams;
    this.trustedUrl = sanitizer.bypassSecurityTrustResourceUrl('https://player.twitch.tv/?channel=' + this.routeParams.channel);
  }

  ngOnInit() {
  }

}
