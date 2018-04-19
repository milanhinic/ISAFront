import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { OglasiService } from '../../services/oglasi.service'
import { Http } from '@angular/http';


@Component({
  selector: 'app-fan-zona',
  templateUrl: './fan-zona.component.html',
  styleUrls: ['./fan-zona.component.css']
})
export class FanZonaComponent implements OnInit {

  private tudjiOglasi : any;
  private mojiOglasi : any;
  private stranica : any;
  private uloga : any;
  private korisnikToken : string;
  private logovanKorisnik : any;
 

  constructor(private http : Http,private oglasiService : OglasiService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.korisnikToken = localStorage.getItem('logovanKorisnik');
    this.logovanKorisnik = JSON.parse(window.atob(this.korisnikToken.split('.')[1]));
    this.uloga = this.logovanKorisnik.uloga[0].authority;


    if(this.stranica == undefined || this.stranica <= 0){
      this.stranica = 1;
      this.router.navigate(['/fanzona/stranica/'+this.stranica]);
    }
    
    this.oglasiService.dobaviOglase('/app/dobaviOdobreneOglase/'+this.stranica).subscribe((data) => {
        this.tudjiOglasi = data.content;
        console.log(this.tudjiOglasi);

    });
 
  }

  Obrisi(value){

    this.http.delete('/app/obrisiOglas/'+value).subscribe((res) => {
      
      if(res['_body'] != ""){
        this.router.navigate(['/fanzona/stranica/1']);
      }else{
        console.log("Greska pro brisanju oglasa")
      }
    });

      
  }

  Pogledaj(value) {
    this.stranica = 1;
    this.router.navigate(['/pregledajOglas/',  value]);
  }


}
