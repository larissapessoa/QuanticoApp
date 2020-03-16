import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export class FirestoreService {

  constructor(protected db: AngularFirestore) { }

  colecao: any;
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

  /*
  update(recordID, record) {
    this.db.doc('Colaboradores/' + recordID).update(record);
  }

  delete(record_id) {
    this.db.doc('Colaboradores/' + record_id).delete();
  } */

  criar(Colecoes, record) {
    return this.db.collection(Colecoes).add(record);
  }

  criarTurma(doc, record){
    return this.db.collection('Professores').doc(doc).collection('Turmas').add(record);
  }

  getTurmas(doc){
    var collection = this.db.collection('Professores').doc(doc).collection('Turmas');
    return collection.get();
  }

    getTurmasList(colecao1, colecao2, docRef){
      return this.db.collection(colecao1).doc(docRef).collection(colecao2).snapshotChanges();
    }


}