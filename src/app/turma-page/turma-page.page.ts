import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdiconarTemasComponent } from '../adiconar-temas/adiconar-temas.component';


@Component({
  selector: 'app-turma-page',
  templateUrl: './turma-page.page.html',
  styleUrls: ['./turma-page.page.scss'],
})
export class TurmaPagePage implements OnInit {


  infoTurma = {
    emailProfessor: "",
    nomeTurma: "",
    salaTurma: "",
    descricaoTurma: ""
  }

  urlImg: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public modalController: ModalController

  ) { }

 
  ngOnInit() {
    this.urlImg = "assets/images/014-astronaut.png";
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state.data) {
        this.infoTurma.emailProfessor = this.router.getCurrentNavigation().extras.state.data.email;
        this.infoTurma.nomeTurma = this.router.getCurrentNavigation().extras.state.data.nome_turma;
        this.infoTurma.salaTurma = this.router.getCurrentNavigation().extras.state.data.sala;
        this.infoTurma.descricaoTurma = this.router.getCurrentNavigation().extras.state.data.descricao;
      }
      else console.log("nao entrei no if")
    });
    console.log("info turma", this.router.getCurrentNavigation().extras.state);
  }

  async adicionarTemas() {
    const modal = await this.modalController.create({
      component: AdiconarTemasComponent
    });
    return await modal.present();
  }

}
