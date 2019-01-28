import { Stream } from './stream.model';

export interface StreamResponse {
  streams: Stream[];
  _links: any
}
