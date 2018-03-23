import { Component, OnInit } from '@angular/core';
import { PozBioService } from '../../services/poz-bio.service';

@Component({
  selector: 'app-poz-bio',
  templateUrl: './poz-bio.component.html',
  styleUrls: ['./poz-bio.component.css']
})
export class PozBioComponent implements OnInit {

  pozBios : any;

  constructor(private pozBioService : PozBioService) { 
    this.pozBios = pozBioService.pozBios;
    console.log(this.pozBios);
  }

  ngOnInit() {
    
  }

}
