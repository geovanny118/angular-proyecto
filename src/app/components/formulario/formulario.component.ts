import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/models';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  tiposDocumentos: string[] = ["Seleccione", "CC", "CE", "Registro civil"];

  persona: Persona = new Persona();
  listaPersona: Array<Persona> = [];

  cargarDatos(): void {
    console.log("funciona");
    this.listaPersona.push(this.persona);
    this.persona = new Persona();
  }

}
