import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PozBioService } from '../../services/poz-bio.service';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-poz-bio-preview',
  templateUrl: './poz-bio-preview.component.html',
  styleUrls: ['./poz-bio-preview.component.css']
})
export class PozBioPreviewComponent implements OnInit {

  private pozBio: any;
  private sale: any[];
  private id: number;
  private idSala: number;

  latitude: number = 51.678418;
  longitude: number = 7.809007;

  private isDodavanje: boolean;
  private isIzmena: boolean;

  constructor(private http:Http, private route: ActivatedRoute, private router: Router, private pozBioService: PozBioService) { }

  ngOnInit() {

    this.idSala = -1;

    this.isDodavanje = false;
    this.isIzmena = false;

    this.pozBio = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.http.get('/app/vratiJedan/'+this.id).subscribe((res) => {
      
      if(res['_body'] === ""){
        this.router.navigate(['/']);
      }else{
        this.pozBio = res.json();
      }
    });

    this.http.get('/app/vratiSale/'+this.id).subscribe((res) => {
      
      if(res['_body'] === ""){
        this.router.navigate(['/']);
      }else{
        this.sale = res.json();
        console.log(this.sale)
      }
    });
   

    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + 'novi sad zmaj jovina').subscribe((res) => {
      let temp = res.json();
      console.log(temp.results[0].geometry.location);
      this.longitude = res.json().results[0].geometry.location.lng;
      this.latitude = res.json().results[0].geometry.location.lat;
    });

  }

  pogledajSalu = function(salaId : number){
    this.router.navigate(['/sala/'+salaId]);
  }

  izmeniSalu = function(salaId : number){

    this.isIzmena = !this.isIzmena;
    this.idSala = salaId;   
  }

  dodaj = function(){
    this.isDodavanje = !this.isDodavanje;
  }

  izmeniPozBio = function(){
    this.router.navigate(['izmeniPozBio/'+this.pozBio.id]);
  }
  

}
