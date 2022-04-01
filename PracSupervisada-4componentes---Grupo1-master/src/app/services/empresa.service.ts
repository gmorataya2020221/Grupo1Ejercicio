import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  public url: String = "http://localhost:3000/api"
  public headersVariable = new HttpHeaders().set("Content-Type","application/json");

  constructor(public _http: HttpClient) {}
    obtenerEmpresa() : Observable <any>{
       return this._http.get(this.url + "/obtenerEmpresa", {headers: this.headersVariable })
    }
  
}
