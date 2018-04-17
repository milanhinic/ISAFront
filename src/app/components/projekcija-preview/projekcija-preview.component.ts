import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projekcija-preview',
  templateUrl: './projekcija-preview.component.html',
  styleUrls: ['./projekcija-preview.component.css']
})
export class ProjekcijaPreviewComponent implements OnInit {

  @Input() pozBio;
  private datumProjekcija: any;
  private projekcije: any[] = [];
  private startAt;

  constructor(private http: Http) { }

  ngOnInit() {
    this.startAt = new Date(Date.now());
    console.log(this.startAt)
    this.datumProjekcija = this.startAt;
  }

  preuzmiProjekcije = function(){

    this.http.post("/app/vratiProjekcijePoDanu?idPozBio="+this.pozBio.id+"&datum="+this.datumProjekcija).subscribe(res => {
      if(res['_body'] != ""){
        this.projekcije = res.json();
      }else{
        alert(res.headers.get('message'))
      }
    })

  }

  konvertujDatume = function(dateInMili: number){
    var date = new Date(dateInMili);
    return (date.toString()).substr(3, 18);
  }

}
