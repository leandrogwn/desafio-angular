import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './component/pagina/inicial/inicial.component';
import { AssinarComponent } from './component/pagina/assinar/assinar.component';
import { PostComponent } from './component/pagina/post/post.component';
import { SobreComponent } from './component/pagina/sobre/sobre.component';
import { UsuarioComponent } from './component/pagina/usuario/usuario.component';
import { CadastroPostComponent } from './component/cadastro/cadastroPost/cadastroPost.component';

const routes: Routes = [
  {path: '', component:InicialComponent},
  {path: 'assinar', component:AssinarComponent},
  {path: 'post', component:PostComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'sobre', component:SobreComponent},
  {path: 'cadastroPost', component:CadastroPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
