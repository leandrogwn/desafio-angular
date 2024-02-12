import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './component/pagina/inicial/inicial.component';
import { AssinarComponent } from './component/pagina/assinar/assinar.component';
import { PostComponent } from './component/pagina/post/post.component';
import { SobreComponent } from './component/pagina/sobre/sobre.component';

const routes: Routes = [
  {path: '', component:InicialComponent},
  {path: 'assinar', component:AssinarComponent},
  {path: 'post', component:PostComponent},
  {path: 'sobre', component:SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
