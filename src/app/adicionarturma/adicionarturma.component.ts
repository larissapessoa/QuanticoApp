import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-adicionarturma',
  templateUrl: './adicionarturma.component.html',
  styleUrls: ['./adicionarturma.component.scss'],
})
export class AdicionarturmaComponent implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  emailProfessor: any;

  validation_messages = {
    'nome_turma': [
      { type: 'required', message: "Um nome para a turma é necessário." },
    ],
    'descricao': [
      { type: 'required', message: 'Descreva um pouco sobre essa turma, assim ficará mais fácil para todos saberem qual jornada irão trilhar!' },
      { type: 'minlength', message: 'A descrição deve ter pelo menos 10 caracteres.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    private navParams: NavParams,
    private modalController: ModalController

  ) {
    this.emailProfessor = this.navParams.data.email;
  }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      nome_turma: new FormControl('', Validators.compose([
        Validators.required
      ])),
      sala: new FormControl(''),
      descricao: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });




  }

  async verificarCodigoTurma() {
    var codigo = this.generatePassword(6);
    var data_array = [];
    await this.firestore.getCodigosTurmas().then(data => {
      data_array = data;
    });
    if (data_array.indexOf(codigo) == -1) {
      return codigo;
    } else {
      this.verificarCodigoTurma();
    }
  }


  generatePassword(len) {
    var pwd = [],
      cc = String.fromCharCode,
      R = Math.random,
      rnd, i;
    pwd.push(cc(48 + (0 | R() * 10))); // push a number
    pwd.push(cc(65 + (0 | R() * 26))); // push an upper case letter
    for (i = 2; i < len; i++) {
      rnd = 0 | R() * 62; // generate upper OR lower OR number
      pwd.push(cc(48 + rnd + (rnd > 9 ? 7 : 0) + (rnd > 35 ? 6 : 0)));
    }
    // shuffle letters in password
    return pwd.sort(function () { return R() - .5; }).join('');
  }

  cadastrarTurma(value) {
    var prop;
    this.verificarCodigoTurma().then(codigo => {
      prop = { "nome_turma": value.nome_turma, "sala": value.sala, "descricao": value.descricao, "codigo": codigo };
    });
    this.firestore.getProfessor().subscribe(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email == this.emailProfessor) {
          this.firestore.criarTurma(doc.id, prop)
            .then(res => {
              console.log(res);
              this.errorMessage = "";
              this.successMessage = "Turma criada com sucesso. Comece sua jornada com seus alunos!";

            }, err => {
              console.log(err);
              this.errorMessage = err.message;
              this.successMessage = "";
            });
        }

      });
    })
    this.closeModal();
  }

  goPage() {
    this.navCtrl.navigateBack('');
  }



 //Fecha o modal e volta para  página anterior
 async closeModal() {
  const onClosedData: string = "Wrapped Up!";
  await this.modalController.dismiss(onClosedData);
}






}
