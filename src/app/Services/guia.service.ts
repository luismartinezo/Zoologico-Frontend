import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuiaService {
  private API_SERVER = "http://localhost:8090/api/v1/guias/";

  constructor(private httpClient: HttpClient) { }


// Listar
  public getAllGuias(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
// Guardar
  public saveGuia (guia:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + "create",guia);
  }
  
  // Eliminar
  public deleteGuia(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }

  // Actualizar
  public updateGuia(guia: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + "update/", guia)
  }

  // Detalle por ID 
  public detailGuia(id: any): Observable<any>{
    return this.httpClient.get(this.API_SERVER + "detail/"+id)
  }
}
