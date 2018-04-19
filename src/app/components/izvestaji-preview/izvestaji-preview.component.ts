import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PrijavljenKorisnikService } from '../../services/prijavljen-korisnik.service';

@Component({
  selector: 'app-izvestaji-preview',
  templateUrl: './izvestaji-preview.component.html',
  styleUrls: ['./izvestaji-preview.component.css']
})
export class IzvestajiPreviewComponent implements OnInit {

  private ambijentTip: number;
  private projekcijeTip: number;
  private prihodiTip: number; 
  private pozBio: any;

  private ocenaA: number;
  private ocenaP: number;

  private izvestajDatum1: any;
  private izvestajDatum2: any;
  private izvestajDatum3: any;

  constructor(private http:Http, private rks: PrijavljenKorisnikService) { }

  ngOnInit() {
    this.ocenaA = 0.0;
    this.ocenaP = 0.0;

  }

  prikaziAmbijent = function(){
    if(this.ambijentTip != undefined){
      this.http.get('/app/secured/ukupanAmbijent?mode='+this.ambijentTip, this.rks.postaviHeadere()).subscribe(res => {
        console.log(res);
        if(res['_body'] != ''){
          this.ocenaA = Math.round(res.json() * 100) / 100;
        }else{
          alert(res.header.get("message"));
        }
      })
    }
  }

  prikaziProjekcije = function(){
    if(this.projekcijeTip != undefined){
      this.http.get('/app/secured/ukupnoProjekcije?mode='+this.projekcijeTip, this.rks.postaviHeadere()).subscribe(res => {
        console.log(res);
        if(res['_body'] != ''){
          this.ocenaP = Math.round(res.json() * 100) / 100;
        }else{
          alert(res.header.get("message"));
        }
      })
    }
  }

  prikaziPrihode = function(){
    console.log(this.izvestajDatum2)
    console.log(this.izvestajDatum3)
  }

}
