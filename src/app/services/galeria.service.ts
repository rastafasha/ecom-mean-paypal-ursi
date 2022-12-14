import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {environment} from 'src/environments/environment';
import { Galeria } from "../models/galeria.model";
import { map } from 'rxjs/operators';

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  public url;

  constructor(
    private _http : HttpClient,
  ) {
    this.url = environment.baseUrl;
  }

  get token():string{
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return{
      headers: {
        'x-token': this.token
      }
    }
  }

  listar(){
    const url = `${base_url}/galerias`;
    return this._http.get<any>(url, this.headers)
      .pipe(
        map((resp:{ok: boolean, galerias: Galeria[]}) => resp.galerias)
      )
  }
  // listar(filtro):Observable<any>{
  //   let headers = new HttpHeaders().set('Content-Type','application/json');
  //   return this._http.get(this.url + 'galeria/'+filtro,{headers:headers})
  // }

  // find_by_product(id):Observable<any>{
  //   let headers = new HttpHeaders().set('Content-Type','application/json');
  //   return this._http.get(this.url + 'galeria_producto/find/'+id,{headers:headers})
  // }

}
