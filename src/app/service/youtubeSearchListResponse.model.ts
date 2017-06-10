export class YoutubeSearchListResponse {
  items: SearchResult[];
}

export class SearchResult {
  snippet: Snippet;
}

class Snippet {
  title: string;
}
