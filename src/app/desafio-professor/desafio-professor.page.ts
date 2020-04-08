import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { IonSlides, NavController } from '@ionic/angular';


@Component({
  selector: 'app-desafio-professor',
  templateUrl: './desafio-professor.page.html',
  styleUrls: ['./desafio-professor.page.scss'],
})
export class DesafioProfessorPage implements OnInit {

  desafio: any;
  emailEstudante: any;
  tema: any;
  ulrImgContinuar: any;
  texto: any;
  pergunta: any;
  opcoes = {
    opcao1: "",
    opcao2: "",
    opcao3: "",
    opcao4: ""
  };
  respostaCorreta: any;
  acertou: any;
  respondeuCerto: any;
  respondeu: any;
  mensagemResposta: any;
  pontos: any;
  respondeuErrado: any;
  video: any;
  desafioImagem: any;

  @ViewChild(IonSlides, { static: false }) slides: IonSlides;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tts: TextToSpeech,
    private navCtrl: NavController

  ) { }

  ngOnInit() {
    this.ulrImgContinuar = "assets/images/005-astronaut.png";
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.desafio = this.router.getCurrentNavigation().extras.state.data.desafio;
        this.emailEstudante = this.router.getCurrentNavigation().extras.state.data.emailEstudante;
      }
    });
    this.tema = this.desafio[0].Tema;
    this.texto = this.desafio[0].Texto;
    this.opcoes.opcao1 = this.desafio[0].Desafio.opcao1;
    this.opcoes.opcao2 = this.desafio[0].Desafio.opcao2;
    this.opcoes.opcao3 = this.desafio[0].Desafio.opcao3;
    this.opcoes.opcao4 = this.desafio[0].Desafio.opcao4;
    this.pergunta = this.desafio[0].Desafio.pergunta;
    this.respostaCorreta = this.desafio[0].Resposta;
    this.video = this.desafio[0].Video;
    this.desafioImagem = "assets/images/020-astronaut.png";
    console.log("pagina aa", this.video)

  }

  async lerTexto(){

    this.tts.speak({
      text: this.texto,
      locale: 'pt-BR',
      rate: 0.75
  
    }); 
  }

  pararLeitura(){
    this.tts.speak("").then((value)=>{
      });
  }

  voltarHome(){
    this.navCtrl.navigateForward('/desafios-turma');

  }

  next(){
    return this.slides.slideNext();
  }

  respostaCerta(numero){
    if(numero == this.respostaCorreta){
      this.acertou = true;
        this.pontos = 100;
        console.log("Resposta Certa");
        this.respondeu = true;
        this.respondeuCerto = true;
        this.mensagemResposta = "Resposta correta! Você fez " + this.pontos + " aprendiz! Arraste para o lado";
    }else{
      this.respondeu = true;
      this.respondeuErrado = true;
      this.mensagemResposta = "Resposta errada! Por favor, arraste para o lado!";
    }

  }
  

  prev() {
    this.slides.slidePrev();
  }

}
