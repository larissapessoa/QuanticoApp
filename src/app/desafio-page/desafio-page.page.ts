import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogicProvider } from './services/logic.service';
import { IonSlides } from '@ionic/angular';
import { ServicostorageService } from '../services/servicostorage.service';
import anime from 'animejs/lib/anime.es';
import { FirestoreService } from '../services/firestore.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
//import { triggerAsyncId } from 'async_hooks';

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
  respondeuErrado: boolean;
  respondeuCerto: boolean;
  totalQuestions: number;
  titulo: string;
  ulrImgContinuar: any;
  txtLiterario: any;
  changeBackground: any;
  urlTxt: string;
  urlDesafio: string;
  urlVideo: string;
  pontos: number;
  messagemResposta: any;
  idEstudante: any;
  respostaTexto: string;
  respondeuErrado2: boolean;
  cont_resp: number;
  acertou: boolean;
  respondeuSegunda: any;
  frase: string;
  completaFrase: string;
  level: string;

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public _logic: LogicProvider,
    private storageFase: ServicostorageService,
    private firestore: FirestoreService,


  ) { }

  ngOnInit() {
    this.cont_resp = 0;
    this.acertou = false;
    this.ulrImgContinuar = "assets/images/005-astronaut.png";
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.txtLiterario = this.router.getCurrentNavigation().extras.state.data.id;
        this.idEstudante = this.router.getCurrentNavigation().extras.state.data.idEstudante;
      }
      console.log("idEstudante", this.idEstudante);
      console.log("id txt", this.txtLiterario);

    });
    this.urlTxt = 'assets/textos/texto' + this.txtLiterario + '.json';
    this.questions$ = this._logic.getData(this.urlTxt);
    this.questions$.subscribe((res) => {
      this.totalQuestions = res.length
    })
    console.log("txy", this.questions$);

    this.tituloTxtLiterario(this.txtLiterario);
    this.urlDesafio = 'assets/desafios/' + this.txtLiterario + '.json';
    this.desafio$ = this._logic.getDesafio(this.urlDesafio);
    //this.resposta = this.desafio$[0].resposta;
    this.desafio$.forEach(desafio => {
      this.resposta = desafio[0].resposta;
    })

    this.urlVideo = 'assets/video/' + this.txtLiterario + '.mp4';

  
  }


  /* ionViewWillEnter() {
    this.questions$ = this._logic.getData()
    this.questions$.subscribe((res) => {
      this.totalQuestions = res.length
    })
  } */

  callAnime(resposta) {
    anime({
      targets: '.animate-me',
      /* translateX: [
        { value: 100, duration: 1200 },
        { value: 0, duration: 800 }
      ], */
      rotate: '1turn',
      backgroundColor: '#ff00ff',
      duration: 3000
    });
    this.respostaCerta(resposta);
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
    if (this.cont_resp <= 1 && !this.acertou) {
      if (resposta == this.resposta) {
        this.acertou = true;
        this.pontos = 100;
        console.log("Resposta Certa");
        this.respondeu = true;
        this.respondeuCerto = true;
        this.messagemResposta = "Resposta correta! Você fez " + this.pontos + " aprendiz! Arraste para o lado";
        console.log(this.idEstudante);
        this.firestore.atualizarPontos("Estudantes", this.idEstudante, this.pontos);
        this.storageFase.getFases().then(data => {
          var AnyData = <[Fases]>data;
          //se a resposta for certa e minha fase atual -->
          if (AnyData[this.txtLiterario - 1].habilitado && !AnyData[this.txtLiterario].habilitado) {
            AnyData[this.txtLiterario].habilitado = true;
            this.storageFase.setFases(AnyData).then(data2 => {
              console.log("Proxima Fase Liberada");
            })
          }
        });
      }
      else {
        this.respondeu = true;
        this.respondeuErrado = true;
        this.messagemResposta = "Resposta errada! Por favor, arraste para o lado!";
        this.desafioFrases(this.txtLiterario);
      }
    } else {
      this.cont_resp++;
    }
  }


  desafioFrases(fase) {
    switch (fase) {
      case 1: 
        this.frase = "No meu humilde argumento, De tudo quanto tem massa";
        return this.completaFrase = "Nos mostra o conhecimento";
      case 2:
        this.frase = "Como massa, peso e medida, Temperatura e calor...";
        return this.completaFrase = "Com líquido, sólido e vapor";
      case 3:
        this.frase = "E até a aceleração, É uma força vetor....";
        return this.completaFrase = "Módulo é o mesmo valor";

  default:
        console.log("Não possui texto");
    }
  }


  jogoDaMemoria(fase) {
   
    if(fase == 1){
      this.level = "/level1"
    }else if (fase == 2){
      this.level = "/level2"
    }else if (fase == 3){
      this.level = "/level3"
    }else{
      console.log("Não possui texto");
    }
  }


  compararResposta() {
    this.respondeuSegunda = true;
    var n = this.respostaTexto.localeCompare(this.completaFrase);
    if (n == 0) {
      console.log("Resposta Certa!");
      this.respondeuCerto = true;
      this.pontos = 50;
      this.messagemResposta = "Resposta correta! Você fez " + this.pontos + " aprendiz!";

    }
    else {
      console.log("Tente novamente!");
      this.messagemResposta = "Resposta errada! Por favor, arraste para o lado!";
      this.respondeuErrado2 = true;
      this.jogoDaMemoria(this.txtLiterario);
    }
    console.log("string2", this.completaFrase);
    console.log("n", n);

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