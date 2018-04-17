import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { OglasiService } from '../../services/oglasi.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-oglasi-preview',
  templateUrl: './oglasi-preview.component.html',
  styleUrls: ['./oglasi-preview.component.css']
})
export class OglasiPreviewComponent implements OnInit {

  private oglas: any;
  private id : any;
  private slika : any;

  constructor(private http:Http, private route: ActivatedRoute, private router: Router, private oglasiService : OglasiService) { }

  ngOnInit() {

    this.oglas = {};

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    
   this.http.get('/app/oglas/'+this.id).subscribe((data) => {
      
      if(data['_body'] != ""){
        this.oglas = data.json();
        console.log(this.oglas.path);
        
      }else{
        console.log('Greska pro dobavljanju oglasa')
        this.router.navigate(['/']);
      }
   });


  }

  odbaciOglas(value) {
    this.http.delete('/app/obrisiOglas/'+value).subscribe((res) => {
      
      if(res['_body'] != ""){
        this.router.navigate(['/odobriOglase/stranica/1']);
      }else{
        console.log("Greska pro odbacivanju oglasa")
      }
    });

  }


  odobriOglas(value) {
    this.http.put('/app/odobriOglas', this.oglas).subscribe((res) => {
      
      if(res['_body'] != ""){
        this.router.navigate(['/odobriOglase/stranica/1']);
      }else{
        console.log("Greska pro odbacivanju oglasa")
      }
    });

  }


}
