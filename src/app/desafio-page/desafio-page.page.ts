import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogicProvider } from './services/logic.service';
import { IonSlides } from '@ionic/angular';
import { ServicostorageService } from '../services/servicostorage.service';
import anime from 'animejs/lib/anime.es';

https://github.com/larissapessoa/QuanticoApp.git

@Component({
  selector: 'app-desafio-page',
  templateUrl: './desafio-page.page.html',
  styleUrls: ['./desafio-page.page.scss'],
})
export class DesafioPagePage implements OnInit {
  questions$: Observable<IData[]>;
  desafio$: Observable<DesafioData[]>;
  options$: Observable<Options[]>;
  resposta: any;
  respondeu: boolean;
  totalQuestions: number;
  titulo: string;
  ulrImgContinuar: any;
  txtLiterario: any;
  changeBackground: any;
  urlTxt: string;
  urlDesafio: string;
  urlVideo: string;

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public _logic: LogicProvider,
    private storageFase: ServicostorageService

  ) { }

  ngOnInit() {
    this.ulrImgContinuar = "assets/images/005-astronaut.png";
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.txtLiterario = this.router.getCurrentNavigation().extras.state.data;
      }
      console.log("txt", this.txtLiterario.id)

    });
    this.urlTxt = 'assets/textos/texto' + this.txtLiterario.id + '.json';
    this.questions$ = this._logic.getData(this.urlTxt);
    this.questions$.subscribe((res) => {
      this.totalQuestions = res.length
    })
    console.log("txy", this.questions$);

    this.tituloTxtLiterario(this.txtLiterario.id);
    this.urlDesafio = 'assets/desafios/1.json';
    this.desafio$ = this._logic.getDesafio(this.urlDesafio);
    //this.resposta = this.desafio$[0].resposta;
    this.desafio$.forEach(desafio => {
      this.resposta = desafio[0].resposta;
    })

    this.urlVideo = 'assets/video/' + this.txtLiterario.id + '.mp4';

   /*   //this.changeBackground = true;
    var urlTxt = 'assets/textos/' + this.txtLiterario.id +'.pdf';
    console.log('urlTxt', urlTxt);
    
    this.document.viewDocument('file:///android_asset/www/assets/1.pdf', 'application/pdf', options) */;

    //this.urlTxt = 'assets/textos/' + this.txtLiterario.id +'.pdf';

  }


  /* ionViewWillEnter() {
    this.questions$ = this._logic.getData()
    this.questions$.subscribe((res) => {
      this.totalQuestions = res.length
    })
  } */

  callAnime() {
    anime({
      targets: '.animate-me',
      translateX: [
        { value: 100, duration: 1200 },
        { value: 0, duration: 800 }
      ],
      rotate: '1turn',
      backgroundColor: '#ff00ff',
      duration: 2000
    });
  }

  tituloTxtLiterario(id) {
    switch (id) {
      case 1:
        return this.titulo = "Introdução á Fisíca";
      case 2:
        return this.titulo = "Grandezas";
      case 3:
        return this.titulo = "Vetores";
      case 4:
        return this.titulo = "Dilatação Linear";
      case 5:
        return this.titulo = "Dilatação Linear";
      case 6:
        return this.titulo = "Termologia";
      case 7:
        return this.titulo = "Energia e Trabalho de uma força";
      case 8:
        return this.titulo = "Energia e Trabalho de uma força";
      case 9:
        return this.titulo = "Dilatação térmica";
      default:
        console.log("tente novamente");
    }
  }

  //método que faz a troca dos slides.
  segmentChanged(event: any) {
    if (event.detail.value === 'desafio') {
      this.slides.slideNext();
    } else {
      this.slides.slidePrev();
    }
  }

  respostaCerta(resposta) {
    if (resposta == this.resposta) {
      console.log("Resposta Certa");
      this.respondeu = true;
      this.storageFase.getFases().then(data => {
        var AnyData = <[Fases]>data;
        //se a resposta for certa e minha fase atual -->
        if (AnyData[this.txtLiterario.id - 1].habilitado && !AnyData[this.txtLiterario.id].habilitado) {
          AnyData[this.txtLiterario.id].habilitado = true;
          this.storageFase.setFases(AnyData).then(data2 => {
            console.log("Proxima Fase Liberada");
          })
        }
      });
    }
    else {
      this.respondeu = true;
      console.log("Tente novamente");
    }
  }


  next() {
    return this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
}

export interface IData {
  id?: number
  question?: string
}

export interface DesafioData {
  id?: number,
  question?: string,
  options?: Observable<Options[]>,
  resposta: string,
  imagem: string

}

export interface Options {
  letra?: string
  option?: string
}

interface Fases {
  numero: number,
  imagem: string,
  habilitado: boolean
}
