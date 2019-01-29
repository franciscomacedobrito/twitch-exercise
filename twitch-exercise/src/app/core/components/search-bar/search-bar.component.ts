import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Stream } from '../../models/stream.model';
import { CommonsService } from '../../services/commons.service';
import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @ViewChild('streamAutoComplete') streamAutoComplete: MatAutocomplete;
  @ViewChild('streamInput', { read: MatAutocompleteTrigger }) streamInputTrigger: MatAutocompleteTrigger;

  public searchLimit: number;
  public searchInput = new FormControl({ value: null });

  public streams: Stream[];
  public filteredStreams: Observable<Stream[]>;

  constructor(private streamService: StreamService,
              private commonsService: CommonsService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(query => {
        this.searchInput.setValue({ channel: { status: query.query } });
      }
    );
  }

  ngOnInit() {
    this.searchLimit = this.getLimitPreference();
    this.initStreamsAutoCompleteControl();
  }

  displayStreamFn(stream?: Stream): string | undefined {
    return stream ? stream.channel.status : '';
  }

  public searchStream(): void {

    this.saveLimitPreference();
    const filteredSearchParam = this.getFilteredSearchParam(this.searchInput);
    this.router.navigate(['search'], { queryParams: { query: filteredSearchParam } }).then(() => {
      this.broadCastSearchRequest();
    })
  }

  private initStreamsAutoCompleteControl() {
    this.createStreamFilterMapping();
  }

  private createStreamFilterMapping() {
    this.searchInput.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.filteredStreams = this.streamService.getFilteredStreams(val, 10);
    });
  }

  private broadCastSearchRequest(): void {
    let searchTerm = this.searchInput.value.channel && this.searchInput.value.channel.status ? this.searchInput.value.channel.status : '';
    this.streamService.broadcastStreamSearchRequest({ searchTerm: searchTerm, limit: this.searchLimit });
  }

  private getLimitPreference(): number {
    const searchLimit = this.commonsService.getStorageItem(localStorage, 'searchLimit');
    return searchLimit ? searchLimit : 24;
  }

  private saveLimitPreference(): void {
    localStorage.setItem('searchLimit', JSON.stringify(this.searchLimit));
  }

  private getFilteredSearchParam(searchParam): string {
    return typeof searchParam.value === 'string' ? searchParam.value : searchParam.value.channel.status;
  }

}
