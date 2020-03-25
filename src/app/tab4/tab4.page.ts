import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  codigoTurma: any;

  constructor(
    public alertController: AlertController,
    public firestore: FirestoreService
  ) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Digite o código da turma',
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
          }
        }
      ]
    });

    await alert.present();
  }


  procurarTurmas(){
    /* this.firestore.getProfessor().subscribe(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email == this.email) {
  
          this.firestore.getTurmasList("Professores", "Turmas", doc.id).subscribe(data => {
  
            this.turmas = data.map(e => {
              return {
                id: e.payload.doc.id,
                Nome: e.payload.doc.data()['nome_turma'],
                Sala: e.payload.doc.data()['sala'],
                Descricao: e.payload.doc.data()['descricao'],
                Codigo: e.payload.doc.data()['codigo']
              };
            }) 
            console.log(this.turmas);
  
          });
        }
      });
    });*/
  } 
 



}
