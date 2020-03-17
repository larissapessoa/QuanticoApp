import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    public router: Router

  ) { }

 
  ngOnInit() {

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

}
