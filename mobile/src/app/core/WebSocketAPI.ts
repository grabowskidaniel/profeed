import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { TabsPage } from '../tabs/tabs.page';

export class WebSocketAPI {
    webSocketEndPoint: string = 'http://localhost:8080/ws';
    userTopic: string = "/topic/";
    stompClient: any;
    tabsPage: TabsPage;
    constructor(tabsPage: TabsPage){
        this.tabsPage = tabsPage;
    }
    _connect() {
        console.log("Initialize WebSocket Connection");
        this.userTopic = this.userTopic.concat(localStorage.getItem("userId"));
        console.log("new topic:"+this.userTopic);
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame) {
            _this.stompClient.subscribe(_this.userTopic, function (sdkEvent) {
                _this.onMessageReceived(sdkEvent);
            });
            //_this.stompClient.reconnect_delay = 2000;
        }, this.errorCallBack);
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error) {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            this._connect();
        }, 5000);
    }

 /**
  * Send message to sever via web socket
  * @param {*} message 
  */
    _send(message) {
        console.log("calling logout api via web socket");
        this.stompClient.send("/app/hello", {}, JSON.stringify(message));
    }

    onMessageReceived(message) {
        console.log("Message Recieved from Server :: " + message);
        this.tabsPage.handleMessage(JSON.stringify(message.body));
    }
}