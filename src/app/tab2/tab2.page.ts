import { Component } from '@angular/core';
import { ServicostorageService } from '../services/servicostorage.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  emailEstudante: any;
  pontos: any;

  constructor(
    private storage: ServicostorageService,
    public firestore: FirestoreService,

  ) {}


  ngOnInit() {
    this.storage.getEmail().then(data => {
      this.emailEstudante = data;
    });

    this.getPontos();
  }


  getPontos(){
    this.firestore.getEstudantes().subscribe(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email == this.emailEstudante) {
          this.pontos = doc.data().pontos;
          console.log(this.pontos);
        }
      })
    });
  }


}
