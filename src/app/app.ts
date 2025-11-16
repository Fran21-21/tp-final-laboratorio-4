import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registrarse } from "./registrarse/registrarse";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Registrarse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ALLTICKETS');
}
