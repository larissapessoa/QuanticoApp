import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';

export class FirestoreService {

  constructor(
    protected db: AngularFirestore,
    public toastController: ToastController) { }

  colecao: any;
  listCodigosTurma = new Array();

  create(record) {
    return this.db.collection('Colaboradores').add(record);
  }

  //getAll(): AngularFirestoreCollection {
  //  return this.db.collection('Colaboradores');
  //}
  getProfessor() {
    var collection = this.db.collection('Professores');
    return collection.get();
  }

  getEstudantes() {
    var collection = this.db.collection('Estudantes');
    return collection.get();
  }

  /*
  update(recordID, record) {
    this.db.doc('Colaboradores/' + recordID).update(record);
  }

  delete(record_id) {
    this.db.doc('Colaboradores/' + record_id).delete();
  } */

  atualizarPontos(colecao, doc, pontos) {
    return this.db.collection(colecao).doc(doc).update({
      "pontos": firebase.firestore.FieldValue.increment(pontos)
    })
  }

  

  criar(Colecoes, record) {
    return this.db.collection(Colecoes).add(record);
  }

  criarTurma(doc, record) {
    return this.db.collection('Professores').doc(doc).collection('Turmas').add(record);
  }

  getTurmas(doc) {
    var collection = this.db.collection('Professores').doc(doc).collection('Turmas');
    return collection.get();
  }

  getTurmasList(colecao1, colecao2, docRef) {
    return this.db.collection(colecao1).doc(docRef).collection(colecao2).snapshotChanges();
  }

  getDesafiosList(docRef2, docRef) {
    return this.db.collection("Professores").doc(docRef).collection("Turmas").doc(docRef2).collection("Desafios").snapshotChanges();
  }

  criarDesafio(docProfessor, docTurma, record){
    return this.db.collection('Professores').doc(docProfessor).collection('Turmas').doc(docTurma).collection('Desafios').add(record);
  }

  adicionarEstudanteTurma(docProfessor, docTurma, record){
    return this.db.collection('Professores').doc(docProfessor).collection('Turmas').doc(docTurma).collection("Estudantes").add(record);
  }

  adicionarTurmaEstudante(docEstudante, record){
    return this.db.collection('Estudantes').doc(docEstudante).collection("Turmas").add(record);
  }

  async getCodigosTurmas() {
    this.listCodigosTurma = new Array();
    this.getProfessor().subscribe(snapshot => {
      snapshot.forEach(doc => {
        this.getTurmasList('Professores', 'Turmas', doc.id).subscribe(turma_number => {
          for (let index = 0; index < turma_number.length; index++) {
            const element = turma_number[index];
            if (element.payload.doc.data().codigo != undefined) {
              this.listCodigosTurma.push(element.payload.doc.data().codigo);
            }
          }
        });
      });
    })
    return this.listCodigosTurma;
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


}