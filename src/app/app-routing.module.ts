import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { AboutIndexComponent } from './pages/nosotros/about-index/about-index.component';
import { AboutComponent } from './pages/nosotros/about/about.component';

//tienda
import { CursoComponent } from './pages/cursos/curso/curso.component';
import { CursosComponent } from './pages/cursos/cursos/cursos.component';
import { ProductosComponent } from './pages/productos/productos/productos.component';
import { ProductoComponent } from './pages/productos/producto/producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

//legal
import { FaqComponent } from './pages/legal/faq/faq.component';
import { PrivacypolicyComponent } from './pages/legal/privacypolicy/privacypolicy.component';

//Auth
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'curso/:id', component: CursoComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'producto/:id', component: ProductoComponent},
  { path: 'blogs', component: BlogListComponent},
  { path: 'blog/:id', component: BlogDetailComponent},
  { path: 'about', component: AboutIndexComponent},
  { path: 'about/:id', component: AboutComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'cart', component: CarritoComponent},
  { path: 'privacy-policy', component: PrivacypolicyComponent},
  { path: 'category/:category_name', component: ProductoComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'registro', component: RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component:  HomeComponent },
  { path: '**', component:  NopagefoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
