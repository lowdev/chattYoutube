import { Component, OnInit } from '@angular/core';
import { YoutubeSearch } from '../service/youtube.search';

@Component({
  selector: 'videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {

  constructor(private youtubeSearch: YoutubeSearch) { }

  ngOnInit() {
    this.youtubeSearch.resetPageToken()
      .search("ozrics")
      .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('yay'));
  }

}
