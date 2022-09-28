import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/models';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tiposDocumentos: string[] = ["Seleccione", "CC", "CE", "Registro civil"];

  persona: Persona = new Persona();
  listaPersona: Array<Persona> = [];

  
  constructor(private _modalService: NgbModal){

  }
  
  
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

  crearRegistro(){
    const MODAL = this._modalService.open(FormularioComponent, {
      windowClass: 'modal'
    });
  }
}
