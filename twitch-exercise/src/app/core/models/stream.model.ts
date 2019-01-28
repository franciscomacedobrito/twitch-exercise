import { ChannelResponse } from './channel-response.model';

export class Stream {

  _id: number;
  game: string;
  viewers: number;
  video_height: number;
  average_fps: number;
  delay: number;
  created_at: string;
  is_playlist: boolean;
  stream_type: string;
  preview: any;
  channel: ChannelResponse;
  _links: any;
  sanitizedThumbnailUrl: string;

  constructor(
    _id: number,
    game: string,
    viewers: number,
    video_height: number,
    average_fps: number,
    delay: number,
    created_at: string,
    is_playlist: boolean,
    stream_type: string,
    preview: any,
    channel: ChannelResponse,
    _links: any,
    sanitizedThumbnailUrl: string
  ) {
    this._id = _id;
    this.game = game;
    this.viewers = viewers;
    this.video_height = video_height;
    this.average_fps = average_fps;
    this.delay = delay;
    this.created_at = created_at;
    this.is_playlist = is_playlist;
    this.stream_type = stream_type;
    this.preview = preview;
    this.channel = channel;
    this._links = _links;
    sanitizedThumbnailUrl = sanitizedThumbnailUrl;

  }
}
