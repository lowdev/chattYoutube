import { Component } from '@angular/core';

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
    console.log(videoId);
  }
}
