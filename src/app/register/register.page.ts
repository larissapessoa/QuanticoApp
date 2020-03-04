import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
   // public navParams: NavParams
  ) {
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }
}