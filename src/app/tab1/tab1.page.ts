import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ServicostorageService } from '../services/servicostorage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  fases: Fases[] = [
    {
      numero: 1,
      imagem: "assets/images/017-astronaut.png",
      habilitado: true
    },
    {
      numero: 2,
      imagem: "assets/images/020-astronaut.png",
      habilitado: false
    },
    {
      numero: 3,
      imagem: "assets/images/005-astronaut.png",
      habilitado: false
    }
  ]

  constructor(
    private router: Router,
    private consultaFase: ServicostorageService
  ) { }

  ionViewWillEnter() {
    this.verificarDisponivel();
  }
  verificarDisponivel() {
    this.consultaFase.getFases().then(data => {
      if (data != null) {
        this.fases = <[Fases]>data;
      } else {
        this.consultaFase.setFases(this.fases).then(data2 => {
          console.log("Esta Nulo (Não Mais)");
        })
      }
    });
  }
  abrirDesafio(numero: number) {

    let data = {
      id: numero,

    }
    let navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this.router.navigate(['/desafio-page'], navigationExtras);
  }

}


interface Fases {
  numero: number,
  imagem: string,
  habilitado: boolean
}

