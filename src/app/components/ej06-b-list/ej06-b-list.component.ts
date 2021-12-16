import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ej06-b-list',
  templateUrl: './ej06-b-list.component.html',
  styleUrls: ['./ej06-b-list.component.css']
})
export class Ej06BListComponent implements OnInit {
  @Input() nombres:string[] = [];
  @Output() borraNombreEmitter:EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  borrarFila(pos: number) {
    this.borraNombreEmitter.emit(pos);
  }

}


