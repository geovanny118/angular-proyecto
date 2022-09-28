import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/models';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.css']
})
export class TablaDatosComponent implements OnInit {

  constructor() { }

  @Input() listaPersonaHijo: Array<Persona>;
  @Output() emitirDatos = new EventEmitter();

  ngOnInit(): void {
  }

  enviarDatos(datos: Persona) {
    console.log(datos);
    this.emitirDatos.emit(datos);
  }
}
