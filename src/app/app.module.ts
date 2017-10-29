import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { APP_SERVICES } from './service';

import { AppComponent } from './app.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosSearchBarComponent } from './videos-search-bar/videos-search-bar.component';
import { VideoComponent } from './video/video.component';
import { RoomComponent } from './room/room.component';

const appRoutes: Routes = [
  { path: 'watch/:id', component: VideoComponent },
  { path: '', component: VideosListComponent },
  { path: 'room', component: RoomComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent,
    VideosSearchBarComponent,
    VideoComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MaterializeModule,
    FormsModule,
    YoutubePlayerModule
  ],
  providers: [
    ...APP_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
