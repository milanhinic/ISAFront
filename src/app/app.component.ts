import { Component } from '@angular/core';
import { PozBioService } from './services/poz-bio.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  korisnikToken : string;
  logovanKorisnik : any;


  constructor(private pozBioService : PozBioService, private router: Router) {
   
   }

  ngOnInit() {
    AppComponent.updateUserStatus.subscribe(res => {
      this.korisnikToken = localStorage.getItem('logovanKorisnik');
      this.logovanKorisnik = JSON.parse(window.atob(this.korisnikToken.split('.')[1]));
    })
    this.korisnikToken = localStorage.getItem('logovanKorisnik');
    if(this.korisnikToken){
      this.logovanKorisnik = JSON.parse(window.atob(this.korisnikToken.split('.')[1]));
    }
  }

  prikaziBioskope(){
    this.pozBioService.setTip('bio');
    this.router.navigate(['/bioskopi/stranica/1']);
  }

  prikaziPozorista(){
    this.pozBioService.setTip('poz');
    this.router.navigate(['/pozorista/stranica/1']);
  }

  napraviNovoPB(){
    this.router.navigate(['/noviPozBio']);
  }

  idiNaProfil(){
    this.router.navigate(['/profil']);
  }

  prijava(){
    this.router.navigate(['/login']);
  }

  odjava = function(){
    this.logovanKorisnik = null;
    localStorage.removeItem("logovanKorisnik");
  }


  public static updateUserStatus: Subject<boolean> = new Subject();

}
