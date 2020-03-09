import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LogicProvider {

  //private dataUrl: string = "assets/textos/texto1.json"

  constructor(private http: HttpClient) { }

  getData(dataUrl: string): Observable<IData[]> {
    return this.http.get<IData[]>(dataUrl)
  }

  getDesafio(dataUrl: string): Observable<DesafioData[]> {
    return this.http.get<DesafioData[]>(dataUrl)
  }

}

export interface IData {
  id?: number
  question?: string
  img?: string
}

export interface DesafioData {
  id?: number
  question?: string
  options?: Observable<Options[]>
  resposta: string,
  imagem: string
}

export interface Options {
  letra?: string
  option?: string
}