import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServicostorageService {

 
  get: any;
  upload: any;
  ref: any;

  constructor(public storage: Storage) {
  }
  getFases() {
    return this.storage.get('fases');
  }
  async setFases(arrayProds) {
    console.log("Situacao   " + arrayProds[1].habilitado);
    return this.storage.set('fases', arrayProds);

  }

  async setEmail(email){
    return this.storage.set('email', email);
  }

  getEmail(){
    return this.storage.get('email');
  }
}
