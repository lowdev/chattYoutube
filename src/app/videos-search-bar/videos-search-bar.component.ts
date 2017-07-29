import { Component, OnInit } from '@angular/core';
import { SearchSharedService } from '../service/search-shared.service';

@Component({
  selector: 'videos-search-bar',
  templateUrl: './videos-search-bar.component.html',
  styleUrls: ['./videos-search-bar.component.css']
})
export class VideosSearchBarComponent implements OnInit {

  value = '';

  constructor(private sharedService: SearchSharedService) { }

  ngOnInit() {
  }


  onEnter(value: string) {
    this.sharedService.emitChange(value);
    this.value = value;
  }
}
