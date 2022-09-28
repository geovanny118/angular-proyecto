import { Component } from '@angular/core';
import { Persona } from 'src/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiposDocumentos: string[] = ["Seleccione", "CC", "CE", "Registro civil"];

  persona: Persona = new Persona();
  listaPersona: Array<Persona> = [];

  ngOnInit() {
  }

  cargarDatos(): void {
    // console.log("funciona");
    this.listaPersona.push(this.persona);
    this.persona = new Persona();
  }

  recepcionDatos(datos: Persona) {
    console.log(datos);
    this.persona = datos;
  }
}
