import { Injectable } from '@angular/core';
import { Http } from '@angular/http' 
@Injectable()
export class OglasiService {

  constructor(private http : Http) { }

  dobaviOglase(path: string){
    return this.http.get(path).map(res => res.json());
  }

  izmeniOglas(path: string, body: any){
    return this.http.put(path, body);
  }

  obrisiOglas(path: string, body: any){
    return this.http.delete(path, body);
  }


}
