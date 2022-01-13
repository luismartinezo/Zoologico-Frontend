import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {

  private API_SERVER = "http://localhost:8090/api/v1/itinerarios/";

  constructor(private httpClient: HttpClient) { }


// Listar
  public getAllItinerarios(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
// Guardar
  public saveItinerario (itinerario:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + "create",itinerario);
  }
  
  // Eliminar
  public deleteItinerario(id: any):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }

  // Actualizar
  public updateItinerario(itinerario: any): Observable<any>{
    return this.httpClient.post(this.API_SERVER + "update/", itinerario)
  }

  // Detalle por ID 
  public detailItinerario(id: any): Observable<any>{
    return this.httpClient.get(this.API_SERVER + "detail/"+id)
  }

}
