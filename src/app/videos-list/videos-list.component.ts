import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { YoutubeSearch } from '../service/youtube.search';
import { YoutubeSearchListResponse, SearchResult } from '../service/youtubeSearchListResponse.model';
import { SearchSharedService } from '../service/search-shared.service';

import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  modalActions = new EventEmitter<string | MaterializeAction>();
  videos: SearchResult[];

  @Input()
  private isMobile: boolean;

  @Output()
  private onVideoClicked: EventEmitter<String> = new EventEmitter<String>();

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }
  constructor(private youtubeSearch: YoutubeSearch, private sharedService: SearchSharedService) { }

  ngOnInit() {
    this.sharedService.getMessage()
      .switchMap(text => this.youtubeSearch.resetPageToken().search(text))
      .subscribe(
      data => {
        let response: YoutubeSearchListResponse = data as YoutubeSearchListResponse;
        this.videos = response.items;
        console.log(response.items[0]);
      },
      err => console.log(err));

    this.getMostPopularVideos("FR");
  }

  private getMostPopularVideos(regionCode: string) {
    this.videos = [];
    this.youtubeSearch.resetPageToken()
      .getMostPopularVideos(regionCode)
      .subscribe(
      data => {
        let response: YoutubeSearchListResponse = data as YoutubeSearchListResponse;
        this.videos = response.items;
        console.log(response.items[0]);
      },
      err => console.log(err)
      );
  }

  private onVideoClick(videoId: string) {
    this.onVideoClicked.emit(videoId);
  }
}
