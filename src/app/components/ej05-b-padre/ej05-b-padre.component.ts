import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej05-b-padre',
  templateUrl: './ej05-b-padre.component.html',
  styleUrls: ['./ej05-b-padre.component.css']
})
export class Ej05BPadreComponent implements OnInit {
  private _nombres: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

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
