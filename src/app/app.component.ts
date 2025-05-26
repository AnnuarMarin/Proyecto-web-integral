import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonRouterOutlet } from "@ionic/angular/standalone";
import { LoginComponent } from "./auth/login/login.component";

@Component({
  selector: 'app-root',
  imports: [IonRouterOutlet, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto_git';

  constructor(){
    console.log('Nuevas funciones');
    console.warn("Cuidado");
    console.log("Prueba de conflictos");
  }
}
