import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import { EventVideoService } from '../service/event-video.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers: [EventVideoService]
})
export class VideoComponent implements OnInit {

  player: YT.Player;

  @Input()
  id: string;

  @Input()
  height: number;

  @Input()
  width: number;

  connection: Subscription;

  constructor(private eventVideoService: EventVideoService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.id = changes.id.currentValue;

    if (this.player != null) {
      this.player.loadVideoById(this.id);
      this.eventVideoService.sendMessage('add-message', { playerState: PlayerState.LOAD, videoId: this.id });
    }
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player)

    this.connection = this.eventVideoService.getMessages().subscribe(message => {
      console.log("message received playerState: " + message["text"]["playerState"]);

      switch (message["text"]["playerState"]) {
        case PlayerState.LOAD:
          console.log("message received videoId: " + message["text"]["videoId"]);
          this.player.loadVideoById(message["text"]["videoId"]);
          break;
        case PlayerState.PLAY:
          this.player.playVideo();
          break;
        case PlayerState.PAUSE:
          this.player.pauseVideo();
          break;
        default:
          break;
      }
    });

    this.eventVideoService.sendMessage('player-ready', "");
  }

  onStateChange(event) {
    console.log("message received: " + event.data);
    this.eventVideoService.sendMessage('add-message', { playerState: event.data, id: this.id });
  }
}

enum PlayerState {
  LOAD = -2,
  PLAY = 1,
  PAUSE = 2
}
