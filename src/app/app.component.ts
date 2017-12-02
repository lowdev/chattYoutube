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
  isMobile: boolean;

  @ViewChild('videoPlayer')
  videoPlayer: ElementRef;
  width: number;
  height: number;

  @ViewChild('mobileVideoPlayer')
  mobileVideoPlayer: ElementRef;
  widthMobile: number;
  heightMobile: number;

  constructor(private _changeDetectionRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.isMobile = window.innerWidth < 900;
    if (this.videoPlayer != null) {
      this.width = this.videoPlayer.nativeElement.offsetWidth;
      this.height = this.videoPlayer.nativeElement.offsetHeight;
    }
    if (this.mobileVideoPlayer != null) {
      this.widthMobile = this.mobileVideoPlayer.nativeElement.offsetWidth;
      this.heightMobile = this.mobileVideoPlayer.nativeElement.offsetHeight;
    }

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
