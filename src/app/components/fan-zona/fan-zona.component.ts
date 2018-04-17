import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OglasiService } from '../../services/oglasi.service'


@Component({
  selector: 'app-fan-zona',
  templateUrl: './fan-zona.component.html',
  styleUrls: ['./fan-zona.component.css']
})
export class FanZonaComponent implements OnInit {

  private tudjiOglasi : any;
  private mojiOglasi : any;
  private stranica : any;
 

  constructor(private oglasiService : OglasiService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    if(this.stranica == undefined || this.stranica <= 0){
      this.stranica = 1;
      this.router.navigate(['/fanzona/stranica/'+this.stranica]);
    }
    
    this.oglasiService.dobaviOglase('/app/dobaviOdobreneOglase/'+this.stranica).subscribe((data) => {
        this.tudjiOglasi = data.content;
        console.log(this.tudjiOglasi);

    });



 
  }

}
