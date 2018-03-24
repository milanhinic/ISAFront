import { Component, OnInit } from '@angular/core';
import { PozBioService } from '../../services/poz-bio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {

  constructor(private pozBioService : PozBioService, private router: Router) { }

  ngOnInit() {
    
  }

  prikaziBioskope(){
    this.pozBioService.setTip('bio');
    this.router.navigate(['/bioskopi']);
  }

  prikaziPozorista(){
    this.pozBioService.setTip('poz');
    this.router.navigate(['/pozorista']);
  }

}
