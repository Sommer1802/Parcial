import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PrincipalComponent } from './principal/principal.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListadoUsuarioComponent } from './listado-usuario/listado-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, CrearProductoComponent,ListadoUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Parcial';
}
