import { Component, OnInit, EventEmitter } from '@angular/core';
import { SearchSharedService } from '../service/search-shared.service';
import { Router }              from '@angular/router';

@Component({
  selector: 'videos-search-bar',
  templateUrl: './videos-search-bar.component.html',
  styleUrls: ['./videos-search-bar.component.css']
})
export class VideosSearchBarComponent implements OnInit {
  sidenavActions = new EventEmitter<any>();
  sidenavParams = [];
  value = '';

  constructor(private sharedService: SearchSharedService, private router: Router) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  hideMenu(): void {
    this.sidenavParams = ['hide'];
    this.sidenavActions.emit('sideNav');
  }

  onEnter(value: string) {
    this.sharedService.emitChange(value);
    this.value = value;
  }
}
