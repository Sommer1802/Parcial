import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  producto = {
    nombre: "",
    precio: ""
  }

  mss: string = "";
  res: string = "";

  onSubmit(form: NgForm) {

    this.mss = "";
    this.res = '';

    if (form.invalid) {
      this.mss = "Este campo es obligatorio.";
      return;
    }

    this.res = 'Producto creado exitosamente';
    console.log('Producto creado:', this.producto);
  }
}

