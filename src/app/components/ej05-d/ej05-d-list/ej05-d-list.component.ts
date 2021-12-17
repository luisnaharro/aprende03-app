import { Component, OnInit } from '@angular/core';
import { NombresService } from 'src/app/services/nombres.service';

@Component({
  selector: 'app-ej05-d-list',
  templateUrl: './ej05-d-list.component.html',
  styleUrls: ['./ej05-d-list.component.css']
})
export class Ej05DListComponent implements OnInit {
  
  constructor(private nombresService: NombresService) { }

  ngOnInit(): void {
  }

  get nombres() {
    return this.nombresService.nombres;
  }

  borrarFila(pos: number) {
    this.nombresService.borraFila(pos);
  }


}
