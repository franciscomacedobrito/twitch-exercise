import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { backendConfig, clientConfig } from '../../../assets/environments/environment';
import { StreamResponse } from '../models/stream-response.model';
import { StreamSearchEventModel } from '../models/stream-search-event.model';
import { Stream } from '../models/stream.model';

@Injectable({ providedIn: 'root' })
export class StreamService {

  private baseUrl = `${backendConfig.host}`;
  private headers = new HttpHeaders().set('Client-ID', clientConfig.clientId);
  private subject = new Subject<any>();

  constructor(protected http: HttpClient) {
  }

  public broadcastStreamSearchRequest(searchTerm: StreamSearchEventModel) {
    this.subject.next(searchTerm);
  }

  public getStreamSearchResult(): Observable<StreamSearchEventModel> {
    return this.subject.asObservable();
  }

  public getFilteredStreams(searchTerm: string, limit: number): Observable<Stream[]> {
    return this.transformStreamObservable(this.searchStreams(searchTerm, limit));
  }

  searchStreams(searchTerm: string, limit: number): Observable<StreamResponse> {
    const params = {
      query: searchTerm,
      limit: limit.toString()
    };
    return this.http.get<StreamResponse>(this.baseUrl + backendConfig.api.v5 + '/search/streams', {
      headers: this.headers,
      params: params
    });
  }

  private transformStreamObservable(observable:  Observable<StreamResponse>): Observable<Stream[]> {
    return observable.pipe(
      map<StreamResponse, Stream[]>(response => response.streams)
    );
  }

}
