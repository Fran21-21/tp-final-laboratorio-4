import { Routes } from '@angular/router';
import { PaginaPrincipal } from './pagina-principal/pagina-principal';
import { Registrarse } from './registrarse/registrarse';

export const routes: Routes = [
    {
        path: 'pagina-principal', component: PaginaPrincipal
    },
    {
        path: 'registrarse', component: Registrarse
    },
    {
        path: '**', redirectTo: 'pagina-principal'
    }
];
