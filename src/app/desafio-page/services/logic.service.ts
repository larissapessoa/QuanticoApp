import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LogicProvider {

    private dataUrl: string = "assets/textos/texto1.json"

      constructor(private http: HttpClient) { }

      getData(): Observable<IData[]> {
        return this.http.get<IData[]>(this.dataUrl)
     }

}

export interface IData {
  id?: number
  question?: string
  img?: string
}