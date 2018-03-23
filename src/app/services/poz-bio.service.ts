import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PozBioService {

  public pozBios : any;

  constructor(public http:Http) {}

  vratiSadrzaj(path:string){
    return this.http.get(path).map(res => res.json());
  }


   
}
