import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class PrijavljenKorisnikService {

  constructor(private http: Http) { }


  private postaviHeadere() : RequestOptions{
    let headers = new Headers();
    headers.append('token', localStorage.getItem('logovanKorisnik'));
    let options = new RequestOptions({headers : headers});

    return options;
  }

  dobaviRegistrovanogKorisnika(path: string){
    return this.http.get(path, this.postaviHeadere());
  }

  izmeniKorisnika(path: string, body: any){
    return this.http.put(path, body, this.postaviHeadere());
  }

<<<<<<< HEAD
  postuj(path:string, body: any){
    return this.http.post(path, body, this.postaviHeadere());
  }

  postujListu(path:string, body: any[]){
    return this.http.post(path, body, this.postaviHeadere());
  }
=======
  dobaviAdmine(path:string){
    return this.http.get(path).map(res => res.json());
  }

>>>>>>> 1eca37f08aa676abf7485549b533f529bd073840
}
