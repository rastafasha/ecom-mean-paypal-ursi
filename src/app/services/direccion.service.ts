import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Direccion } from '../models/direccion.model';

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  public direccion: Direccion;
  public url;

  constructor(
    private _http: HttpClient,
    private router: Router,
    ) {
      this.url = environment.baseUrl;
  }


  registro(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + '/direccions/direccion/registro',data,{headers:headers})
  }

  listar(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/direccions/direcciones/'+id,{headers:headers})
  }

  get_direccion(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/direccions/direccion/data/'+id,{headers:headers})
  }

  update(data):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url + '/direccions/direccion/update/'+data._id,data,{headers:headers})
  }

  eliminar(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url + '/direccions/direccion/remove/'+id,{headers:headers})
  }


}
