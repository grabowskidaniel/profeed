import { Component, OnInit } from '@angular/core';
import { WebSocketAPI } from '../../core/WebSocketAPI';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  webSocketAPI: WebSocketAPI;
  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
    this.webSocketAPI = new WebSocketAPI(new TabsPage());
    this.connect();
  }

  connect() {
    this.webSocketAPI._connect();
  }

  disconnect() {
    this.webSocketAPI._disconnect();
  }

  sendMessage() {
    this.webSocketAPI._send('this.name');
  }

  handleMessage(message) {
    console.log('new msg' + message);
    this.playAudio();
  }

  playAudio() {
    const audio = new Audio();
    audio.src = 'assets/sounds/notification.wav';
    audio.load();
    audio.play();
  }
}
