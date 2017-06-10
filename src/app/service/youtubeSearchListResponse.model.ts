export class YoutubeSearchListResponse {
  items: SearchResult[];
}

export class SearchResult {
  snippet: Snippet;
}

class Snippet {
  title: string;
  thumbnails: Thumbnails;
}

class Thumbnails {
  default: Thumbnail;
  hight: Thumbnail;
  medium: Thumbnail;
}

class Thumbnail {
  height: number;
  width: number;
  url: string;
}
