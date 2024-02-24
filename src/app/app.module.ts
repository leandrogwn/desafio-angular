import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { InicialComponent } from './component/pagina/inicial/inicial.component';
import { FooterComponent } from './component/pagina/footer/footer.component';
import { AssinarComponent } from './component/pagina/assinar/assinar.component';
import { PostComponent } from './component/pagina/post/post.component';
import { SobreComponent } from './component/pagina/sobre/sobre.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './component/pagina/usuario/usuario.component';
import { CadastroPostComponent } from './component/cadastro/cadastroPost/cadastroPost.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table'; 
import { EditPostComponent } from './component/edit/edit-post/edit-post.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicialComponent,
    FooterComponent,
    AssinarComponent,
    PostComponent,
    SobreComponent,
    UsuarioComponent,
    CadastroPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
