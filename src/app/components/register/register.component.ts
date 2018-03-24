import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registracijaForma;

  constructor() { }

  ngOnInit() {
    this.registracijaForma = new FormGroup({
      email : new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-z0-9._]{0,64}@[a-z]{2,10}(\.[a-z]{2,10})+')
      ])),
      sifra : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      sifraPotvrda : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      ime : new FormControl("",Validators.required),
      prezime : new FormControl("",Validators.required),
      grad : new FormControl("",Validators.required),
      telefon : new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern('\\+?[0-9]{0,12}')
      ]))
    },this.passwordMatchValidator)
  }

  passwordMatchValidator = function(g: FormGroup) {

    if(g.get('sifra').value === g.get('sifraPotvrda').value){
        return null;
    }else{
      return {'missmatch': true};
    }
 }

  registruj = function(korisnik){
    console.log(korisnik);
  }

}
