import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id: string;

  onVideoClicked(videoId) {
    this.id = videoId;
    $(".video-player-widget").slideDown();
  }

  hideVideoPlayerWidget() {
    $(".video-player-widget").slideToggle();
  }
}
