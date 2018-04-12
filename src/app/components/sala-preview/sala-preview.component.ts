import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sala-preview',
  templateUrl: './sala-preview.component.html',
  styleUrls: ['./sala-preview.component.css']
})
export class SalaPreviewComponent implements OnInit {

  private sala : any;
  private idSala : number;
  private mode: number;
  private isIzmena: boolean;
  private isDodavanjeSegmenta: boolean;

  constructor(private http:Http, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.mode = 1;
    this.isIzmena = false;
    this.isDodavanjeSegmenta = false;

    this.route.params.subscribe(params => {
      this.idSala = +params['id'];
    });

    this.http.get('/app/vratiJednuSalu/'+this.idSala).subscribe((res) => {
      
      if(res['_body'] != ""){
        this.sala = res.json();
      }else{
        alert('Greska!');
      }
    });

  }

  izmeni = function(){
    this.isIzmena = !this.isIzmena;
  }

  dodajSegment = function(){
    this.isDodavanjeSegmenta = !this.isDodavanjeSegmenta;
  }

}
