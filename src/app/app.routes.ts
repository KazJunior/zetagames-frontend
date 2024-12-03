import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component'
import { ContatosComponent } from './pages/contatos/contatos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "cadastro",
        component: CadastroComponent,
    },
    {
        path: "contatos",
        component: ContatosComponent,
    },
    {
        path: "inicio",
        component: InicioComponent,
    },
    {
        path: "perfil",
        component: PerfilComponent,
    },
];
