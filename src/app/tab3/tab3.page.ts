import { Component, OnInit } from '@angular/core';
import {DesafioPagePage} from 'src/app/desafio-page/desafio-page.page';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  

  notificacao: string;
  constructor(
    public desafio: DesafioPagePage
    ) { }
 
    ngOnInit() {
    //this.notificacaoTeste();
    }
/* 
  single_notification() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    });
  }
 
 
  multi_notification() {
    // Schedule multiple notifications
    this.localNotifications.schedule([{
      id: 1,
      text: 'Multi ILocalNotification 1',
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    }, {
      id: 2,
      title: 'Local ILocalNotification Example',
      text: 'Multi ILocalNotification 2',
      icon: 'http://example.com/icon.png'
    }]);
  }
 
 
 
  delayed_notification() {
    // Schedule delayed notification
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: { at: new Date(new Date().getTime() + 3600) },
      led: 'FF0000',
      sound: null
    });
  }

  notificacaoTeste(){
    if( this.desafio.respondeuCerto == true){
      this.notificacao = "Você ganhou 100 pontos!";
    }     
 
  }*/

 
 
}
