import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { StompService } from 'ng2-stomp-service';

// let SERVER_URL = 'http://localhost:8087';

@Injectable()
export class SocketService {
 
  // private url = 'http://localhost:8080'; 
  // private subscription: any; 
  
  // constructor(private stomp: StompService) {
  //     stomp.configure({
  //         host: this.url,
  //         debug: true,
  //         queue: {'init': false}
  //     });
  // }

  // connect(){
  //     this.stomp.startConnect().then(()=>{
  //         this.stomp.done('init');
  //         this.subscription = this.stomp.subscribe('/topic/greeting',this.getMessages);
  //     });
  // }

  // sendMessage(message){
  //   this.stomp.send('/topic/greeting',{"data":message});   
  // }
  
  // getMessages = (data) => {
  //     console.log(data);
  // }  
}

