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

  private pozorista: any[];
  private bioskopi: any[];
  private predstave: any[];
  private filmovi: any[];
  private pozBios: any[];
  private predFilms: any[];

  private ambijentTip: number;
  private ambijentZa: number;

  private projekcijeTip: number;
  private projekcijeZa: number;

  private ocenaA: number;
  private ocenaP: number;

  private prihodiTip: number; 
  private pozBio: any;

  private izvestajDatum1: any;
  private izvestajDatum2: any;
  private izvestajDatum3: any;

  constructor(private http:Http, private rks: PrijavljenKorisnikService) { }

  ngOnInit() {
    this.ocenaA = 0.0;
    this.ocenaP = 0.0;

    this.http.get("/app/vratiSva").subscribe(res => {
      if(res['_body'] != ''){
        let temp = res.json();
        this.pozorista = temp[0];
        this.bioskopi = temp[1];
      }
    });

    this.http.get("/app/vratiSvePredFilmove").subscribe(res => {
      if(res['_body'] != ''){
        let temp = res.json();
        this.predstave = temp[0];
        this.filmovi = temp[1];
      }
    });

  }

  //vratiSvePredFilmove

  promeniAmbijent = function(){

    if(this.ambijentTip == 0){
      this.pozBios = this.pozorista;
    }else if(this.ambijentTip == 1){
      this.pozBios = this.bioskopi;
    }else{
      this.pozBios = [];
    }
  }

  promeniProjekciju = function(){

    if(this.projekcijeTip == 1){
      this.predFilms = this.predstave;
    }else if(this.projekcijeTip == 0){
      this.predFilms = this.filmovi;
    }else{
      this.predFilms = [];
    }
  }

  prikaziAmbijent = function(){
    if(this.ambijentTip != undefined && this.ambijentZa != undefined){
      this.http.get('/app/ocenaAmbijenta/'+this.ambijentZa).subscribe(res => {
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
    
    if(this.projekcijeTip != undefined && this.projekcijeZa != undefined){
      this.http.get('/app/ocenaProjekcije/'+this.projekcijeZa).subscribe(res => {
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
