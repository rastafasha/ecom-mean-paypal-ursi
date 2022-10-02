import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Congeneral } from 'src/app/models/congeneral.model';
import { CategoryService } from 'src/app/services/category.service';
import { CongeneralService } from '../../services/congeneral.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  configuraciones: Congeneral[]=[];
  configuracion: Congeneral;
  categories: Categoria[];

  constructor(
    public configuracionService: CongeneralService,
    public activatedRoute: ActivatedRoute,
    public categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    // this.obtenerConfiguracions();
    this.obtenerCategorias();
    this.activatedRoute.params.subscribe( ({id}) => this.obtenerConfiguracion(id));
  }


  obtenerConfiguracion(_id:string){
    this.configuracionService.getCongeneralById('5f25bd8015655fee54a89691').subscribe(
      resp=>{
        this.configuracion = resp;
        console.log(this.configuracion);
      }
    )
  }
  obtenerCategorias(){
    return this.categoryService.getCategories().subscribe(
      resp=>{
        this.categories = resp;
        console.log(this.categories);
      }
    )
  }

}
