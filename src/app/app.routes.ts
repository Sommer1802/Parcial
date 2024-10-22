import { Routes } from '@angular/router';
import { ListadoUsuarioComponent } from './listado-usuario/listado-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

export const routes: Routes = [
    {
        path: 'listado',
        component: ListadoUsuarioComponent
    },
    {
        path: '',
        component: PrincipalComponent

    },
    {
        path: 'Crear producto',
        component: CrearProductoComponent
    }
];
