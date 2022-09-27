import { Component } from '@angular/core';
import { Persona } from 'src/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola mundo from ts';

  tiposDocumentos: string[] = ["Seleccione", "CC", "CE", "Registro civil"];

  persona: Persona = new Persona();

  cargarDatos(): void {
    console.log("funciona");
  }
}
