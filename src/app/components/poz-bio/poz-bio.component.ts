import { Component, OnInit } from '@angular/core';
import { PozBioService } from '../../services/poz-bio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poz-bio',
  templateUrl: './poz-bio.component.html',
  styleUrls: ['./poz-bio.component.css']
})
export class PozBioComponent implements OnInit {

  pozBios : any;

  constructor(private pozBioService : PozBioService, private router: Router) { 
    
  }

  ngOnInit() {

    if(this.pozBioService.getTip() === 'bio'){
        this.pozBioService.vratiSadrzaj('/app/bioskopi').subscribe((data) => {
          this.pozBios = data.content;
        });
    }else{
      this.pozBioService.vratiSadrzaj('/app/pozorista').subscribe((data) => {
        this.pozBios = data.content;
      });
    }
    
  }

  pogledaj(param){
    if(this.pozBioService.getTip() === 'bio'){
      this.router.navigate(['/bioskopi', param]);
    }else{
      this.router.navigate(['/pozorista', param]);
    }
  }

}
