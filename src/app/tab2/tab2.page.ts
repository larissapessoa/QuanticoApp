import { Component } from '@angular/core';
import { ServicostorageService } from '../services/servicostorage.service';
import { FirestoreService } from '../services/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
/* import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser'; */


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  emailEstudante: any;
  pontos: any;
  foto: any;
  idFoto: number;
  public option;
  endFoto: string;
  imagemUsuario: any;

  constructor(
    private storage: ServicostorageService,
    public firestore: FirestoreService,
   /*  private camera: Camera,
    private sn: DomSanitizer, */


  ) {}


  ngOnInit() {
    this.storage.getEmail().then(data => {
      this.emailEstudante = data;
    });
    this.imagemUsuario = "../assets/images/semFoto.png";
    this.getPontos();
  }


  getPontos(){
    this.firestore.getEstudantes().subscribe(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email == this.emailEstudante) {
          this.pontos = doc.data().pontos;
          console.log("pontos", this.pontos);
        }
      })
    });
  }

  optionC(){
    this.option = 'sim';
  }

  mudarFoto(idFoto){
    switch (idFoto) {
      case 1:
        this.endFoto = "../assets/images/001-astrounaut.png";
        this.option = 'não';
        console.log("entrou");
    }
  }

  /* carregarFoto(option) {

    if (option == 1) {
      var options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
    } else {
      var options: CameraOptions = {
        quality: 100,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = imageData;
      this.imagemUsuario = this.sn.bypassSecurityTrustResourceUrl(base64Image);
    }, (error) => {
      //handle errror
    });

  } */
}
