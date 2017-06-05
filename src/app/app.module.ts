import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosSearchBarComponent } from './videos-search-bar/videos-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent,
    VideosSearchBarComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
