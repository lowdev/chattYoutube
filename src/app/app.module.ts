import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideosSearchBarComponent } from './videos-search-bar/videos-search-bar.component';

import { APP_SERVICES } from './service';

const appRoutes: Routes = [
  //{ path: 'video/:id', component: VideoComponent },
  {
    path: '',
    component: VideosListComponent
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VideosListComponent,
    VideosSearchBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MaterializeModule
  ],
  providers: [
    ...APP_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
