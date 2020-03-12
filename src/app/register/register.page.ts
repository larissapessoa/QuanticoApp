import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  professor: Boolean = false;
  estudante: Boolean = false;

  public form = [
    { val: 'Professor', isChecked: true, colecao: 'Professores' },
    { val: 'Estudante', isChecked: false, colecao: 'Estudantes' }
  ];

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email é necessário.' },
      { type: 'pattern', message: 'Entre com um email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Senha é necessária' },
      { type: 'minlength', message: 'Senha deve ter pelo menos 5 caracteres.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private firestore: FirestoreService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      usuario: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Contra criada com sucesso. Comece sua jornada, tente logar!";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      });
    this.firestore.criarUsuario(value.usuario, value);
  }

  goLoginPage() {
    this.navCtrl.navigateBack('');
  }
}
