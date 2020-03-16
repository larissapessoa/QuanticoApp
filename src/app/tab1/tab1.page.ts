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
      imagem: "assets/images/008-astronaut.png",
      habilitado: false
    },
    {
      numero: 4,
      imagem: "assets/images/013-astronaut.png",
      habilitado: false
    },
    {
      numero: 5,
      imagem: "assets/images/012-astronaut.png",
      habilitado: false
    },
    {
      numero: 6,
      imagem: "assets/images/005-astronaut.png",
      habilitado: false
    }, {
      numero: 7,
      imagem: "assets/images/018-astronaut.png",
      habilitado: false
    },
    {
      numero: 6,
      imagem: "assets/images/019-astronaut.png",
      habilitado: false
    },
    {
      numero: 7,
      imagem: "assets/images/011-astronaut.png",
      habilitado: false
    },
    {
      numero: 8,
      imagem: "assets/images/015-astronaut.png",
      habilitado: false
    },
    {
      numero: 9,
      imagem: "assets/images/014-astronaut.png",
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

