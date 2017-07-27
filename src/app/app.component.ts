import {$WebSocket} from 'angular2-websocket/angular2-websocket';
import {SocketService} from './shared/socket.service';
import {Component, OnInit} from '@angular/core';
import {Message} from './shared/message.model';
import {User} from './shared/user.model';
import { StompService } from 'ng2-stomp-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketService]
})  
export class AppComponent implements OnInit {

	  private user: User;
    private userName: string;
    private messages: string;
    private messageContent: string;
    private ioConnection: any;
    private messageValue : string;
    private dummy : string;
    private url = 'http://localhost:8087/gs-guide-websocket'; 
    private subscription: any;
    private i=0;
  
  constructor(private stomp: StompService) {
      stomp.configure({
          host: this.url,
          debug: true,
          queue: {'init': false}
      });
  }

  ngOnInit() {
  	
  }

  connect(name){
  	console.log("connect fn");
      this.stomp.startConnect().then(()=>{
      	console.log("start connect");
      	
          this.subscription = this.stomp.subscribe('/topic/chat/'+(name),(data)=>{
          	this.dummy= data.to;
          	if(this.messageValue == null){
          		this.messageValue = " ";
          	}
          	this.messageValue = this.messageValue+" "+this.dummy;
          	console.log("tttttttt"+data.to);
          	console.log(typeof this.messageValue);	
          	console.log(this.messageValue);

          });
          
          
      });
  }

disconnect()
{
    this.stomp.disconnect();
    console.log("Disconnected");
}

send(to,message)
{
	console.log("send");
	console.log(to);
	console.log(message);
	    this.stomp.send("/app/chat/"+to,(JSON.stringify({to:message})));
	// this.stomp.send("/app/chat/"+to,(JSON.stringify({'name':(message)})));
}

displayMessage(message){
return message;

}



  //   this.stomp.send('/app/hello',{name:message});   
  //}
  

    // private initModel(userName:string): void {
    //     this.userName = userName;
    //     this.messages = [];
    //     this.initIoConnection();
    // }

    // private initIoConnection(): void {
    //     this.ioConnection = this.socketService.get().subscribe((message: Message) => {
    //         this.messages.push(message);
    //     });
    // }


    // sendMessage(): void {
    //     this.socketService.send(new Message(this.user, this.messageContent));
    //     this.messageContent = null;
    // }
}
