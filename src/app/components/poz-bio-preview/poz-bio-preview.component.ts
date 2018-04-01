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

  public pozBio: any;
  public sale: any[];
  public id: number;
  latitude: number = 51.678418;
  longitude: number = 7.809007;

  constructor(private http:Http, private route: ActivatedRoute, private router: Router, private pozBioService: PozBioService) { }

  ngOnInit() {

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

  izmeni = function(salaId : number){
    this.router.navigate(['/izmeniSalu/'+salaId]);
  }
  
  dodaj = function(){
    this.router.navigate(['/dodajSalu/poz_bio/'+this.id]);
  }
  

}
