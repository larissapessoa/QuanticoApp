import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desafios-turma',
  templateUrl: './desafios-turma.page.html',
  styleUrls: ['./desafios-turma.page.scss'],
})
export class DesafiosTurmaPage implements OnInit {

  desafios: any;
  imagem: any;
  turma = {
    Nome: "",
    Sala: "",
    Descricao: "",
    Codigo: ""
  };

  fases = [
    {
      imagem: "assets/images/017-astronaut.png",
    },
    {
      numero: 2,
      imagem: "assets/images/020-astronaut.png",
    },
    {
      numero: 3,
      imagem: "assets/images/008-astronaut.png",
    },
    {
      numero: 4,
      imagem: "assets/images/013-astronaut.png",
    },
    {
      numero: 5,
      imagem: "assets/images/012-astronaut.png",
    },
    {
      numero: 6,
      imagem: "assets/images/005-astronaut.png",
    }, {
      numero: 7,
      imagem: "assets/images/018-astronaut.png",
    },
    {
      numero: 8,
      imagem: "assets/images/019-astronaut.png",
    },
    {
      numero: 9,
      imagem: "assets/images/011-astronaut.png",
    }
  ]


  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.turma.Nome = this.router.getCurrentNavigation().extras.state.data.Nome;
        this.turma.Sala = this.router.getCurrentNavigation().extras.state.data.Sala;
        this.turma.Descricao = this.router.getCurrentNavigation().extras.state.data.Descricao;
        this.turma.Codigo = this.router.getCurrentNavigation().extras.state.data.Codigo;
        this.desafios = this.router.getCurrentNavigation().extras.state.data.Desafios;
      }
    });
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      //this.verificarDisponivel();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
