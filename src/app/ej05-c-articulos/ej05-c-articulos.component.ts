import { Component, OnInit } from '@angular/core';

import { Articulos } from '../interfaces/articulos';

@Component({
  selector: 'app-ej05-c-articulos',
  templateUrl: './ej05-c-articulos.component.html',
  styleUrls: ['./ej05-c-articulos.component.css']
})
export class Ej05CArticulosComponent implements OnInit {
    ref: string = '';
    description: string= '';
    precio: number= 0;
    iva?: number= undefined;
    stock?: number= undefined;

  articulo: Articulos = {ref:'',description:'', precio: 0, iva: undefined, stock: undefined};
  articulos: Array<Articulos> = [];

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.articulo.ref=this.ref;
    this.articulo.description=this.description;
    this.articulo.precio=this.precio;
    this.articulo.iva=this.precio;
    this.articulo.iva=this.iva;
    this.articulo.stock=this.stock;

    this.articulos.push(this.articulo);
    console.log(this.articulos);
  }

  borraFila(pos: number) {
    this.articulos.splice(pos, 1);
  }

}
