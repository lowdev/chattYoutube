import { Component, OnInit, Input, SimpleChanges, ChangeDetectorRef } from '@angular/core';

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

  shouldSendEvent: boolean = true;

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
    if (changes.id != null) {
      this.id = changes.id.currentValue;
      if (this.player != null) {
        this.player.loadVideoById(this.id);

        this.eventVideoService.sendMessage('add-message', { playerState: PlayerState.LOAD, videoId: this.id });
      }
    }

    if (changes.width != null) {
      this.height = changes.height.currentValue;
      this.width = changes.width.currentValue;
    }
  }

  savePlayer(player) {
    this.player = player;
    this.player.setSize(this.width, this.height);
    console.log('player instance', player)

    this.connection = this.eventVideoService.getMessages().subscribe(message => {
      console.log("message received: " + message["text"]["playerState"]);
      this.shouldSendEvent = false;
      switch (message["text"]["playerState"]) {
        case PlayerState.LOAD:
          this.id = message["text"]["videoId"];
          this.player.loadVideoById(this.id, message["text"]["currentTime"]);
          break;
        case PlayerState.PLAY:
          this.player.seekTo(message["text"]["currentTime"], true);
          this.player.playVideo();
          break;
        case PlayerState.PAUSE:
          this.player.pauseVideo();
          break;
        default:
          break;
      }

      setTimeout(() => this.shouldSendEvent = true, 1000);
    });

    this.eventVideoService.sendMessage('player-ready', "");
  }

  onStateChange(event) {
    if (!this.shouldSendEvent) {
      return;
    }

    console.log("message onStateChange: " + event.data);
    this.eventVideoService.sendMessage('add-message',
      {
        playerState: event.data,
        videoId: this.id,
        currentTime: this.player.getCurrentTime()
      }
    );
  }
}

enum PlayerState {
  LOAD = -2,
  PLAY = 1,
  PAUSE = 2
}
