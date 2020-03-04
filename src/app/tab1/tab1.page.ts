import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController, NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  fases: Fases[] = [
    {
      numero: 1,
      imagem: "assets/images/005-astronaut.png",
      habilitado: true
    },
    {
      numero: 2,
      imagem: "assets/images/005-astronaut.png",
      habilitado: false
    },
    {
      numero: 3,
      imagem: "assets/images/005-astronaut.png",
      habilitado: false
    },
  ]

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    //public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.presentAlert();
      } else {
        this.presentAlert();
      }
    });
  }

  abrirDesafio(numero:number){

    let data = {
      id: numero,

    }
    let navigationExtras : NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate(['/desafio-page'], navigationExtras);
  }

  async presentAlert() {
    const alert = await this.toast.create({
    message: 'Low battery',
    buttons: ['Dismiss']
   });
   await alert.present(); 
}

}


interface Fases {
  numero: number,
  imagem: string,
  habilitado: boolean
}


