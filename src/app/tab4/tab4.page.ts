import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tab1Page } from '../tab1/tab1.page';
import { ServicostorageService } from '../services/servicostorage.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  codigoTurma: any;
  docTurma: any;
  docProfessor: any;
  emailEstudante: any;
  idEstudante: any;
  errorMessage: any;
  successMessage: any;
  turmasEstudante = [] as any;


  constructor(
    public alertController: AlertController,
    public firestore: FirestoreService,
    public tab1: Tab1Page,
    private storage: ServicostorageService


  ) { }

  ngOnInit() {
    this.storage.getEmail().then(data => {
      this.emailEstudante = data;
    })

    this.estudante();

  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Digite o código da turma e confirme seu email novamente!',
      inputs: [
        {
          name: 'codigo',
          type: 'text',
          placeholder: 'código da turma'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            this.codigoTurma = alertData.codigo;
            console.log('Confirm Ok', this.codigoTurma);
            this.procurarTurmas(this.codigoTurma);
          }
        }
      ]
    });

    await alert.present();
  }

  estudante() {
    this.firestore.getEstudantes().subscribe(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email == this.emailEstudante) {
          this.idEstudante = doc.id;
          console.log(this.idEstudante);
        }
      })
    });
  }

  async procurarTurmas(codigoT) {
    this.estudante();
    this.firestore.getProfessor().subscribe(snapshot => {
      snapshot.forEach(doc => {
        var turmasTotal = this.firestore.getTurmasList("Professores", "Turmas", doc.id);
        turmasTotal.forEach(professorTurma => {
          console.log("pt", professorTurma);
          professorTurma.forEach(turma => {
            if (turma.payload.doc.data()['codigo'] == codigoT) {
              this.docProfessor = doc.id;
              this.docTurma = turma.payload.doc.id;
              console.log("achei a turma", turma.payload.doc.data());
              let record = {
                'email': this.emailEstudante,
                'pontos': 0
              }
              console.log("id t", this.docTurma);
              console.log("id p", this.docProfessor);
              this.firestore.adicionarEstudanteTurma(this.docProfessor, this.docTurma, record);
              let record2 = {
                idTurma: this.docTurma
              }
              this.firestore.adicionarTurmaEstudante(this.idEstudante, record2).then(res => {
                console.log(res);
                this.errorMessage = "";
                this.successMessage = "Turma criada com sucesso. Comece sua jornada com seus alunos!";
                this.firestore.presentToast(this.successMessage);
              }, err => {
                console.log(err);
                this.errorMessage = err.message;
                this.successMessage = "";
                this.firestore.presentToast(this.errorMessage);
              });




            }
          })
        })
      })
    })
  }

  async listarTurmas() {
    this.estudante();
    console.log(this.idEstudante);
    this.firestore.getTurmasList("Estudantes", "Turmas", this.idEstudante).subscribe(turmaCodigos => {
      turmaCodigos.forEach(codigo => {
        this.firestore.getProfessor().subscribe(snapshot => {
          snapshot.forEach(doc => {
            var turmasTotal = this.firestore.getTurmasList("Professores", "Turmas", doc.id);
            turmasTotal.forEach(professorTurma => {
              professorTurma.map(e => {
                if (e.payload.doc.id == codigo.payload.doc.data()['idTurma']) {
                  console.log("entrei no if")
                  let turmaEncontrada = {
                    id: e.payload.doc.id,
                    Nome: e.payload.doc.data()['nome_turma'],
                    Sala: e.payload.doc.data()['sala'],
                    Descricao: e.payload.doc.data()['descricao'],
                    Codigo: e.payload.doc.data()['codigo']
                  };
                  console.log(turmaEncontrada);
                  this.turmasEstudante.push(turmaEncontrada);
                  console.log("aqui", this.turmasEstudante.length);
                }
              })

            })
          })

        })
      })
    })
    //this.semTurmasCadastradas();
    

  }


  semTurmasCadastradas(){
    console.log("aqui", this.turmasEstudante.length);
    if (this.turmasEstudante.length == 0) {
      console.log("entrei", this.turmasEstudante.length);
      this.firestore.presentToast("Você ainda não se cadastrou em nenhuma turma");
    }
  }


}
