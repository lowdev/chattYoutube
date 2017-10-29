import { Component, OnInit, EventEmitter } from '@angular/core';
import { SearchSharedService } from '../service/search-shared.service';
import { Router }              from '@angular/router';
import { NgForm }            from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'videos-search-bar',
  templateUrl: './videos-search-bar.component.html',
  styleUrls: ['./videos-search-bar.component.css']
})
export class VideosSearchBarComponent implements OnInit {
  sidenavActions = new EventEmitter<any>();
  modalActions = new EventEmitter<string | MaterializeAction>();
  sidenavParams = [];

  constructor(private sharedService: SearchSharedService, private router: Router) { }

  ngOnInit() {
  }

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  hideMenu(): void {
    this.sidenavParams = ['hide'];
    this.sidenavActions.emit('sideNav');
  }

  onSubmit(searchForm: NgForm) {
    this.sharedService.emitChange(searchForm.value["search"]);
  }

  submit(value: string): void {
    localStorage.set('login', value);
  }
}
