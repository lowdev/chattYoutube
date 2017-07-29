import { Component, OnInit, Input } from '@angular/core';
import { YoutubeSearch } from '../service/youtube.search';
import { YoutubeSearchListResponse, SearchResult } from '../service/youtubeSearchListResponse.model';
import { SearchSharedService } from '../service/search-shared.service';

@Component({
  selector: 'videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  videos: SearchResult[];

  constructor(private youtubeSearch: YoutubeSearch, private sharedService: SearchSharedService) { }

  ngOnInit() {
    this.sharedService.getMessage().subscribe(
      text => {
        console.log(text);
        this.youtubeSearch.resetPageToken()
          .search(text)
          .subscribe(
          data => {
            let response: YoutubeSearchListResponse = data as YoutubeSearchListResponse;
            this.videos = response.items;
            console.log(response.items[0]);
          },
          err => console.log(err));
      });
  }

}
