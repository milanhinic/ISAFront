import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IzmeniService {

  constructor(private http: Http) { }

  izmeniKorisnika(path: string, body: any){
    return this.http.put(path, body);
  }

}
