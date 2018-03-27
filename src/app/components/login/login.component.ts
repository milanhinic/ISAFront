import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service'
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import {FormControl, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  prijavaForma;
  success : boolean;
  message : string;

  constructor(private router : Router, private registerService : RegisterService, private alertService: AlertService) { }

  ngOnInit() {
    this.prijavaForma = new FormGroup({
      email : new FormControl(""),
      lozinka : new FormControl("")
    })
  }

  prijava = function(korisnik){
    this.registerService.registrujKorisnika('/app/login', korisnik).subscribe(res=>{
      this.success = res.json();
      this.message = res.headers.get('message');
      if(!this.success){
        this.alertService.error(this.message);
      }

    });
  }

}

interface Korisnik{
  email : string;
  lozinka : string;
}
