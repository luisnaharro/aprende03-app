import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej03-concatena',
  templateUrl: './ej03-concatena.component.html',
  styleUrls: ['./ej03-concatena.component.css']
})
export class Ej03ConcatenaComponent implements OnInit {
  nombre: string = "";
  apellidos: string = "";
  resultado: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  concatenar(): void {
    this.resultado = `${this.nombre} ${this.apellidos}`
  }

}
