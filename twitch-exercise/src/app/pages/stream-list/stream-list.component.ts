import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Stream } from '../../core/models/stream.model';
import { CommonsService } from '../../core/services/commons.service';
import { StreamService } from '../../core/services/stream.service';

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})
export class StreamListComponent implements OnInit, OnDestroy {

  public streamList: Stream[];
  public searchBarEventSubscription: Subscription;
  public loadingStreams: boolean;
  private queryParamEventSubscription: Subscription;

  constructor(private streamService: StreamService,
              private commonsService: CommonsService,
              private activeRoute: ActivatedRoute) {

    this.subscribeToSearchRequest();
    this.subscribeToQueryChange();

  }

  ngOnInit() {
    this.initScreenWithPreviousSearch(this.activeRoute.snapshot.queryParams.query);
  }

  ngOnDestroy() {
    this.searchBarEventSubscription.unsubscribe();
    this.queryParamEventSubscription.unsubscribe();
  }

  private initScreenWithPreviousSearch(query) {
    if (query) {
      this.initScreenWithSearchedData(query, this.getSearchLimitPreference());
    }
  }

  private subscribeToSearchRequest(): void {
    this.searchBarEventSubscription = this.streamService.getStreamSearchResult().subscribe(searchParams => {
      this.initScreenWithSearchedData(searchParams.searchTerm, searchParams.limit);
    });
  }

  private subscribeToQueryChange(): void {
    this.queryParamEventSubscription = this.activeRoute.queryParams.subscribe(query =>
      this.initScreenWithPreviousSearch(query.query)
    );
  }

  private initScreenWithSearchedData(searchTerm, limit) {
    this.loadingStreams = true;
    this.streamService.searchStreams(searchTerm, limit).subscribe((response) => {
      this.loadingStreams = false;
      this.streamList = response.streams;
    })
  }

  private getSearchLimitPreference(): number {
    return this.commonsService.getStorageItem(localStorage, 'searchLimit')
  }

}
