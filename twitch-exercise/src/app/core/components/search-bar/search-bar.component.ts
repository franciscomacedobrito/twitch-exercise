import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonsService } from '../../services/commons.service';
import { StreamService } from '../../services/stream.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public searchLimit: number;
  public searchForm = new FormGroup({
    searchInput: new FormControl('')
  });

  constructor(private streamService: StreamService,
              private commonsService: CommonsService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(query => {
        this.searchForm.controls.searchInput.setValue(query.query);
      }
    );
  }

  ngOnInit() {
    this.searchLimit = this.getLimitPreference();
  }

  public searchStream(): void {
    this.saveLimitPreference();
    this.router.navigate(['search'], { queryParams: { query: this.searchForm.value.searchInput } }).then(() => {
      this.broadCastSearchRequest();
    })
  }

  private broadCastSearchRequest(): void {
    this.streamService.broadcastStreamSearchRequest({ searchTerm: this.searchForm.value.searchInput, limit: this.searchLimit });
  }

  private getLimitPreference(): number {
    const searchLimit = this.commonsService.getStorageItem(localStorage, 'searchLimit');
    return searchLimit ? searchLimit : 24;
  }

  private saveLimitPreference(): void {
    localStorage.setItem('searchLimit', JSON.stringify(this.searchLimit));
  }

}
