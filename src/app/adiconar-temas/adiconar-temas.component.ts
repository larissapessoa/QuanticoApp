import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavParams, ModalController, NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-adiconar-temas',
  templateUrl: './adiconar-temas.component.html',
  styleUrls: ['./adiconar-temas.component.scss'],
})
export class AdiconarTemasComponent implements OnInit {


  tema: FormGroup;
  texto: FormGroup;
  desafio: FormGroup;
  video: FormGroup;
  urlImgTema: any;
  urlImgTexto: any;
  urlImgDesafio: any;
  urlImgVideo: any;
  emailProfessor: any;
  docTurma: any;
  errorMessage: string = '';
  successMessage: string = '';




  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: FirestoreService,
    private navParams: NavParams,
    private modalController: ModalController,
    private navCtrl: NavController



  ) { 
    this.emailProfessor = this.navParams.data.email;
    this.docTurma = this.navParams.data.docTurma;
  }

  ngOnInit() {
    this.urlImgTema = "assets/images/001-astronaut.png";
    this.urlImgTexto = "assets/images/012-astronaut.png";
    this.urlImgTexto = "assets/images/014-astronaut.png";
    this.urlImgVideo = "assets/images/015-astronaut.png";

    this.criarForm();
  
  }

  next() {
    return this.slides.slideNext();
  }

  criarForm() {
    this.tema = this.formBuilder.group({
      temaTitulo: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.texto = this.formBuilder.group({
      textoLiterario: ['', [Validators.required, Validators.minLength(20)]]
    });
    this.desafio = this.formBuilder.group({
      pergunta: ['', [Validators.required, Validators.minLength(10)]],
      opcao1: ['', [Validators.required, Validators.minLength(5)]],
      opcao2: ['', [Validators.required, Validators.minLength(5)]],
      opcao3: ['', [Validators.required, Validators.minLength(5)]],
      opcao4: ['', [Validators.required, Validators.minLength(5)]],

    });
    this.video = this.formBuilder.group({
      urlVideo: ['', [Validators.required, Validators.minLength(10)]]
    });
    
/* 
    this.formCadastro = this.formBuilder.group({
      nomeUsuario: ['', [Validators.required, Validators.minLength(3)]],
      cpfUsuario: ['', [Validators.required, Validators.minLength(10)]],
      telefoneUsuario: ['', [Validators.required, Validators.minLength(11)]],
      emailUsuario: ['', Validators.email],
      confirmacaoSenhaUsuario: ['', Validators.required]
    }); */


  }

  submit(){
  console.log("entrei no submit");
    let putDesafio = {
      "tema": this.tema.value.temaTitulo,
      "texto": this.texto.value.textoLiterario,
      "desafio": this.desafio.value,
      "video": this.video.value.urlVideo
    }

    this.firestore.getProfessor().subscribe(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email == this.emailProfessor) {
          this.firestore.criarDesafio(doc.id, this.docTurma, putDesafio)
            .then(res => {
              console.log(res);
              this.errorMessage = "";
              this.successMessage = "Desafio criado com sucesso. Desafie seus alunos!";
              this.firestore.presentToast(this.successMessage);
              this.closeModal();

            }, err => {
              console.log(err);
              this.errorMessage = err.message;
              this.successMessage = "";
              this.firestore.presentToast(this.errorMessage);
              this.closeModal();
            });
        }

      });
    }) 
    

  }

  //Fecha o modal e volta para  página anterior
 async closeModal() {
  const onClosedData: string = "Wrapped Up!";
  await this.modalController.dismiss(onClosedData);
}
  

}
