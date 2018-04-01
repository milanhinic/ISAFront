import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service'
import { IzmeniService } from '../../services/izmeni.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  izmenaForma;
  logovanKorisnik : any = JSON.parse(localStorage.getItem('logovanKorisnik'));
  zaIzmenu : any;
  izmena : boolean = false;

  constructor(private izmeniService : IzmeniService, private alertService : AlertService) { }

  ngOnInit() {
  }

  izmeni = function(){
    this.zaIzmenu = Object.assign({},this.logovanKorisnik);
    this.izmenaForma = new FormGroup({
      ime : new FormControl(this.zaIzmenu.ime,Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])),
      prezime : new FormControl(this.zaIzmenu.prezime,Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])),
      grad : new FormControl(this.zaIzmenu.grad,Validators.compose([
        Validators.required,
        Validators.maxLength(60)
      ])),
      telefon : new FormControl(this.zaIzmenu.telefon,Validators.pattern('\\+?[0-9]{6,12}'))
    });
    this.izmena = true;
  }

  ponisti = function(){
    this.izmena = false;
  }

  potvrdiIzmenu = function(korisnik){
    
    korisnik.email = this.logovanKorisnik.email;
    korisnik.tip = this.logovanKorisnik.tip;
    this.izmeniService.izmeniKorisnika('/app/secured/izmena',korisnik).subscribe((res) => {
      this.success = res.json();
      this.message = res.headers.get('message');
      if(!this.success){
        this.alertService.error(this.message);
      }else{
        localStorage.setItem('logovanKorisnik',JSON.stringify(korisnik));
        AppComponent.updateUserStatus.next(true);
        this.alertService.success(this.message);
      }
    });

    
  }

}
