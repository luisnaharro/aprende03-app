import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ej06-b-form',
  templateUrl: './ej06-b-form.component.html',
  styleUrls: ['./ej06-b-form.component.css']
})
export class Ej06BFormComponent implements OnInit {
  nombre: string = '';
  apellidos: string = '';
  @Output() addEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.addEmitter.emit(`${this.nombre} ${this.apellidos}`);
    this.nombre = '';
    this.apellidos = '';
  }

}
