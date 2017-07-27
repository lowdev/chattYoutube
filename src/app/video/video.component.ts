import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
  id: string;
  connection: Subscription;

  constructor(private route: ActivatedRoute, private eventVideoService: EventVideoService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.id = params['id']);
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
