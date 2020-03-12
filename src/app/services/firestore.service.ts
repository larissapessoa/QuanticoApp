import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export class FirestoreService {

  constructor(protected db: AngularFirestore) { }

  create(record) {
    return this.db.collection('Colaboradores').add(record);
  }

  //getAll(): AngularFirestoreCollection {
  //  return this.db.collection('Colaboradores');
  //}

  update(recordID, record) {
    this.db.doc('Colaboradores/' + recordID).update(record);
  }

  delete(record_id) {
    this.db.doc('Colaboradores/' + record_id).delete();
  }

  criarUsuario(Colecoes, record) {
    return this.db.collection(Colecoes).add(record);
  }
}