import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registracijaForma;
  message : string;
  error : boolean = true;

  constructor(private router : Router, private registerService : RegisterService) { }

  ngOnInit() {
    this.registracijaForma = new FormGroup({
      email : new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-z0-9._]{0,64}@[a-z]{2,10}(\\.[a-z]{2,10})+'),
        Validators.maxLength(90)
      ])),
      lozinka : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
      sifraPotvrda : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
      ime : new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])),
      prezime : new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(30)
      ])),
      grad : new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(60)
      ])),
      telefon : new FormControl("",Validators.pattern('\\+?[0-9]{6,12}'))
    },this.passwordMatchValidator)
  }

  passwordMatchValidator = function(g: FormGroup) {

    return g.get('lozinka').value === g.get('sifraPotvrda').value ? null : {'missmatch': true};

 }

  registruj = function(korisnik){

    this.registerService.registrujKorisnika('/app/registracija', korisnik).subscribe((res) => {
      this.error = res.json();
      this.message = res.headers.get('message');
      if(this.error){
        this.router.navigate(['/uspesnaRegistracija']);
      }
    });
  }

}
