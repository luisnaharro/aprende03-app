import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej05-array',
  templateUrl: './ej05-array.component.html',
  styleUrls: ['./ej05-array.component.css']
})
export class Ej05ArrayComponent implements OnInit {
  nombre: string = "";
  apellidos: string = "";
  resultado: string = "";
  array: Array<String> = [];
  

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.resultado = `${this.nombre} ${this.apellidos}`
    this.array.push(this.resultado);
  }

}
