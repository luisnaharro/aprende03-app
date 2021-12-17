import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NombresService {

  private _nombres: string[] = [];

  constructor() { }

  get nombres(): string[] {
    return [...this._nombres]; //... para que devuelva copia del array
  }

  add(nombre:string) {
    this._nombres.push(nombre);
  }

  borraFila(pos: number) {
    this._nombres.splice(pos, 1);
  }

}
