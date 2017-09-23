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
    this.connection = this.eventVideoService.getMessages().subscribe(message => {
      console.log("message received: " + message["text"]);
      switch (message["text"]) {
        case PlayerState.PLAY:
          this.player.playVideo();
          break;
        case PlayerState.PAUSE:
          this.player.pauseVideo();
          break;
        default:
          break;
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.player.loadVideoById(changes.id.currentValue);
    this.id = changes.id.currentValue;
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player)
  }

  onStateChange(event) {
    this.eventVideoService.sendMessage(event.data);
  }
}

enum PlayerState {
  PLAY = 1,
  PAUSE = 2
}
