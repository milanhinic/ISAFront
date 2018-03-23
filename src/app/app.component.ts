import { Component } from '@angular/core';
import { PozBioService } from './services/poz-bio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private pozBioService : PozBioService, private router: Router) { }

  ngOnInit() {
    
  }

  prikaziBioskope(){
    this.pozBioService.vratiSadrzaj('/app/bioskopi').subscribe((data) => {
      this.pozBioService.pozBios = data.content; 
      this.router.navigate(['/bioskopi']);
    });
  }

  prikaziPozorista(){
    this.pozBioService.vratiSadrzaj('/app/pozorista').subscribe((data) => {
      this.pozBioService.pozBios = data.content; 
      this.router.navigate(['/pozorista']);
    });
  }
}
