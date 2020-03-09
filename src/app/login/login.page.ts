import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(

    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    if(this.authService.userDetails() != null){
      this.navCtrl.navigateForward('/tabs');
      console.log(this.authService.userDetails(), "já estive aqui")
    }
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'email': [
      { type: 'required', message: 'Email é necessário' },
      { type: 'pattern', message: 'Por favor, informe um email válido.' }
    ],
    'password': [
      { type: 'required', message: 'A senha é necessária' },
      { type: 'minlength', message: 'A senha deve conter pelo menos 5 caracteres' }
    ]
  };
 

  loginUser(value){
    this.authService.presentLoading("Que comece a aventura...")
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.navCtrl.navigateForward('/tabs');
    }, err => {
      this.authService.presentToast("Algo deu errado :(");
      this.errorMessage = "Não foi encontrado usuário com essas credenciais. Por favor, tente novamente!";
    })
  }

  goToRegisterPage(){
    this.navCtrl.navigateForward('/register');
  }

}
