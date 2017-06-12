export class YoutubeSearchListResponse {
  items: SearchResult[];
}

export class SearchResult {
  snippet: Snippet;
}

class Snippet {
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
