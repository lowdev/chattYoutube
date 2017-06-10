import { Component, OnInit } from '@angular/core';
import { YoutubeSearch } from '../service/youtube.search';
import { YoutubeSearchListResponse, SearchResult } from '../service/youtubeSearchListResponse.model';

@Component({
  selector: 'videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos: SearchResult[];

  constructor(private youtubeSearch: YoutubeSearch) { }

  ngOnInit() {
    this.youtubeSearch.resetPageToken()
      .search("E3")
      .subscribe(
      data => {
        let response: YoutubeSearchListResponse = data as YoutubeSearchListResponse;
        this.videos = response.items;
        console.log(response.items[0]);
      },
      err => console.log(err),
      () => console.log('yay'));
  }

}
