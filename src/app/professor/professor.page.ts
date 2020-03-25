import { Component, OnInit } from '@angular/core';
import { AdicionarturmaComponent } from '../adicionarturma/adicionarturma.component';
import { ModalController, NavController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
})
export class ProfessorPage implements OnInit {


  turmas: any;
  email: any;
  urlImg: any;

  constructor(
    public controlModal: ModalController,
    private firestore: FirestoreService,
    private route: ActivatedRoute,
    public router: Router,
    private navCtrl: NavController,

  ) { }

  ngOnInit() {
    this.urlImg = "assets/images/010-astronaut.png";


    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.email = this.router.getCurrentNavigation().extras.state.data;
      }
    });

    console.log(this.email);
    this.listarTurmas();


  }

/*   ionViewWillEnter() {
    this.listarTurmas();
  }
 */

  async adicionarTurma() {
    console.log()
    const modal = await this.controlModal.create({
      component: AdicionarturmaComponent,
      componentProps: {
        'email': this.email
      }
    });
    return await modal.present();
  }

  listarTurmas() {

    this.firestore.getProfessor().subscribe(snapshot => {
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
    });
  }

  verTurma(id, turma, sala, descricao, codigo){
    let navigationExtras: NavigationExtras = {
      state: {
        data: {
          id:id,
          email: this.email,
          nome_turma: turma,
          sala: sala,
          descricao: descricao,
          codigo: codigo
        } 
      }
    };


    this.navCtrl.navigateForward('/turma-page', navigationExtras);
  }


}
