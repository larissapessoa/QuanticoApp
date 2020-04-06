import { Component } from '@angular/core';
import { ServicostorageService } from '../services/servicostorage.service';
import { FirestoreService } from '../services/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';


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

  constructor(
    private storage: ServicostorageService,
    public firestore: FirestoreService,

  ) {}


  ngOnInit() {
    this.storage.getEmail().then(data => {
      this.emailEstudante = data;
    });

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
}
