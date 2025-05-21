import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  imports: [IonRouterOutlet, RouterOutlet],
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
