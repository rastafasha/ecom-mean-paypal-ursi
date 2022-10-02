import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { CursosComponent } from './cursos/cursos/cursos.component';
import { CursoComponent } from './cursos/curso/curso.component';
import { FaqComponent } from './legal/faq/faq.component';
import { PrivacypolicyComponent } from './legal/privacypolicy/privacypolicy.component';
import { RouterModule } from '@angular/router';
import { ProductoComponent } from './productos/producto/producto.component';
import { ProductosComponent } from './productos/productos/productos.component';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../pipes/pipes.module';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { AboutComponent } from './nosotros/about/about.component';
import { AboutIndexComponent } from './nosotros/about-index/about-index.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    HomeComponent,
    CursosComponent,
    CursoComponent,
    FaqComponent,
    PrivacypolicyComponent,
    ProductosComponent,
    ProductoComponent,
    BlogDetailComponent,
    BlogListComponent,
    AboutComponent,
    AboutIndexComponent,
    CarritoComponent
  ],
  exports: [
    HomeComponent,
    CursosComponent,
    CursoComponent,
    FaqComponent,
    PrivacypolicyComponent,
    ProductosComponent,
    ProductoComponent,
    BlogDetailComponent,
    BlogListComponent,
    AboutComponent,
    AboutIndexComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
    ComponentsModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
