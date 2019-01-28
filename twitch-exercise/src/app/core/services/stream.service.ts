import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { backendConfig, clientConfig } from '../../../assets/environments/environment';
import { StreamResponse } from '../models/stream-response.model';
import { StreamSearchEventModel } from '../models/stream-search-event.model';

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

}
