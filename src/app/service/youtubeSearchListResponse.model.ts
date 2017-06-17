export class YoutubeSearchListResponse {
  items: SearchResult[];
}

export class SearchResult {
  id: Id;
  snippet: Snippet;
}

class Id {
  videoId: string;
}

class Snippet {
  channelId: string;
  title: string;
  thumbnails: Thumbnails;
  channelTitle: string;
}

class Thumbnails {
  default: Thumbnail;
  high: Thumbnail;
  medium: Thumbnail;
}

class Thumbnail {
  height: number;
  width: number;
  url: string;
}
