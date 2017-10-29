import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  id: string;
  width: number;
  height: number;

  @ViewChild('videoPlayer')
  videoPlayer: ElementRef;

  constructor(private _changeDetectionRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.width = this.videoPlayer.nativeElement.offsetWidth;
    this.height = this.videoPlayer.nativeElement.offsetHeight;
    this._changeDetectionRef.detectChanges();
  }

  onVideoClicked(videoId) {
    this.id = videoId;
    $(".video-player-widget").slideDown();
  }

  hideVideoPlayerWidget() {
    $(".video-player-widget").slideToggle();
  }
}
