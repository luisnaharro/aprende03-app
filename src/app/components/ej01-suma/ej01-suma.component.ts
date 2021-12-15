import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej01-suma',
  templateUrl: './ej01-suma.component.html',
  styleUrls: ['./ej01-suma.component.css']
})
export class Ej01SumaComponent implements OnInit {
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  suma() : void {
   this.resultado = this.operandoA + this.operandoB;
  }

}
