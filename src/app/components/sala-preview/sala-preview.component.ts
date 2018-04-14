import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sala-preview',
  templateUrl: './sala-preview.component.html',
  styleUrls: ['./sala-preview.component.css']
})
export class SalaPreviewComponent implements OnInit {

  private segmenti: any;
  private sala : any = {};
  private idSala : number;
  private mode: number;
  private isIzmena: boolean;
  private isDodavanjeSegmenta: boolean;
  private isTipSegmenta: boolean;

  constructor(private http:Http, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.mode = 1;
    this.isIzmena = false;
    this.isDodavanjeSegmenta = false;
    this.isTipSegmenta = false;

    this.route.params.subscribe(params => {
      this.idSala = +params['id'];
    });

    this.http.get('/app/vratiJednuSalu/'+this.idSala).subscribe((res) => {
      
      if(res['_body'] != ""){
        this.sala = res.json();
      }else{
        alert("Greska!"+res.headers.get("Message"));
      }
    });

    this.http.get('/app/vratiSegmenteSala/'+this.idSala).subscribe((res) => {
      
      if(res['_body'] != ""){
        this.segmenti = res.json();
      }else{
        alert("Greska!"+res.headers.get("Message"));
      }
    });

  }

  izmeni = function(){
    this.isIzmena = !this.isIzmena;
  }

  dodajSegment = function(){
    this.isDodavanjeSegmenta = !this.isDodavanjeSegmenta;
  }

  dodajTipSegmenta = function(){
    this.isTipSegmenta = !this.isTipSegmenta;
  }

}
