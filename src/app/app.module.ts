import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignOneComponent } from './components/design-one/design-one.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainInformationComponent } from './components/main-information/main-information.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaDatosComponent } from './components/tabla-datos/tabla-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignOneComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainInformationComponent,
    NavigationBarComponent,
    FormularioComponent,
    TablaDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
