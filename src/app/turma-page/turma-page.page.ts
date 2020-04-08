import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdiconarTemasComponent } from '../adiconar-temas/adiconar-temas.component';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-turma-page',
  templateUrl: './turma-page.page.html',
  styleUrls: ['./turma-page.page.scss'],
})
export class TurmaPagePage implements OnInit {


  infoTurma ={
    idTurma: "",
    emailProfessor: "",
    nomeTurma: "",
    salaTurma: "",
    descricaoTurma: "",
    codigoTurma: ""
  }

  urlImg: any;
  desafios: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public modalController: ModalController,
    public firestore: FirestoreService

  ) { }

 
  ngOnInit() {
    this.urlImg = "assets/images/014-astronaut.png";
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state.data) {
        this.infoTurma.idTurma = this.router.getCurrentNavigation().extras.state.data.id;
        this.infoTurma.emailProfessor = this.router.getCurrentNavigation().extras.state.data.email;
        this.infoTurma.nomeTurma = this.router.getCurrentNavigation().extras.state.data.nome_turma;
        this.infoTurma.salaTurma = this.router.getCurrentNavigation().extras.state.data.sala;
        this.infoTurma.descricaoTurma = this.router.getCurrentNavigation().extras.state.data.descricao;
        this.infoTurma.codigoTurma = this.router.getCurrentNavigation().extras.state.data.codigo;
        
      }
      else console.log("nao entrei no if")
    });
    console.log("info turma", this.router.getCurrentNavigation().extras.state);
    console.log("codigo", this.infoTurma.codigoTurma);
    this.listarDesafios();
  }

  async adicionarTemas() {
    const modal = await this.modalController.create({
      component: AdiconarTemasComponent,
      componentProps: {
        'email': this.infoTurma.emailProfessor,
        'docTurma': this.infoTurma.idTurma
      }
    });
    return await modal.present();
  }

  listarDesafios() {
    this.firestore.getProfessor().subscribe(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email == this.infoTurma.emailProfessor) {

          this.firestore.getDesafiosList(this.infoTurma.idTurma, doc.id).subscribe(data => {

            this.desafios = data.map(e => {
              console.log("desafio bd", e.payload.doc.data())
              return {
                id: e.payload.doc.id,
                Desafio: e.payload.doc.data()['desafio'],
                Tema: e.payload.doc.data()['tema'],
                Texto: e.payload.doc.data()['texto'],
                Video: e.payload.doc.data()['video']
              };
            }) 
            console.log("desafios", this.desafios);

          });
        }
      });
    });
  }

}
