import { Component, OnInit } from '@angular/core';
import { PozBioService } from '../../services/poz-bio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poz-bio',
  templateUrl: './poz-bio.component.html',
  styleUrls: ['./poz-bio.component.css']
})
export class PozBioComponent implements OnInit {

  pozBios : any;
  stranica : number;
  tip : string;

  constructor(private pozBioService : PozBioService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {

    let niz = this.router.url.split('/');

    for(let i = 0; i < niz.length; i++){
      if(niz[i] === 'pozorista' || niz[i] === 'bioskopi'){
        this.tip = niz[i].substring(0, 3);
        break;
      }
    }

    if(this.tip == undefined){
      this.router.navigate(['']);
    }

    this.route.params.subscribe(params => {
      this.stranica = +params['id'];
    });

    if(this.stranica == undefined || this.stranica <= 0){
      this.stranica = 1;
      this.router.navigate(['/bioskopi/stranica/'+this.stranica]);
    }
    
    if(this.tip === 'bio'){
        this.pozBioService.vratiSadrzaj('/app/bioskopi/'+this.stranica).subscribe((data) => {
          this.pozBios = data.content;
        });
    }else{
      this.pozBioService.vratiSadrzaj('/app/pozorista/'+this.stranica).subscribe((data) => {
        this.pozBios = data.content;
      });
    }
    
  }

  prev(){
    this.stranica--;

    if(this.stranica >= 1){
      this.promeniStranicu(vratiSadrzaj => this.vratiSadrzaj);
      
    }else{
      this.stranica = 1;
    }
    
  }

  next(){
    this.stranica++;
    this.promeniStranicu(vratiSadrzaj => this.vratiSadrzaj);
  }

  promeniStranicu(vratiSadrzaj){
    
    if(this.tip === 'bio'){
      this.vratiSadrzaj('/app/bioskopi/');
    }else if(this.tip === 'poz'){
      this.vratiSadrzaj('/app/pozorista/');
    }else{
      this.router.navigate(['']);
    }
  }

  vratiSadrzaj(putanja:string){
    this.pozBioService.vratiSadrzaj(putanja+this.stranica).subscribe((data) => {
      this.pozBios = data.content;
   
      if(this.pozBios.length <= 0){
        this.stranica--;
        alert("Dosli ste do kraja pretrage");
        this.ngOnInit();
        return;
      }
      if(this.tip === 'bio'){
        this.router.navigate(['/bioskopi/stranica/'+this.stranica]);
      }else if(this.tip === 'poz'){
        this.router.navigate(['/pozorista/stranica/'+this.stranica]);
      }
    });
  }

  pogledaj(param){
    this.stranica = 1;
    if(this.pozBioService.getTip() === 'bio'){
      this.router.navigate(['/bioskopi/bioskop', param]);
    }else{
      this.router.navigate(['/pozorista/pozoriste', param]);
    }
  }

}
