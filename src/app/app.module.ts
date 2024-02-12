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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicialComponent,
    FooterComponent,
    AssinarComponent,
    PostComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
