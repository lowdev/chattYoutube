import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { AppComponent } from './app.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosSearchBarComponent } from './videos-search-bar/videos-search-bar.component';
import { VideoComponent } from './video/video.component';

import { APP_SERVICES } from './service';

const appRoutes: Routes = [
  { path: 'watch/:id', component: VideoComponent },
  { path: '', component: VideosListComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent,
    VideosSearchBarComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MaterializeModule,
    YoutubePlayerModule
  ],
  providers: [
    ...APP_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
