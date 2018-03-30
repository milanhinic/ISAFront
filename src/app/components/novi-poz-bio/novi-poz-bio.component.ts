import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novi-poz-bio',
  templateUrl: './novi-poz-bio.component.html',
  styleUrls: ['./novi-poz-bio.component.css']
})
export class NoviPozBioComponent implements OnInit {

  noviPozBioForma: any;

  constructor(private http:Http, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.noviPozBioForma = new FormGroup({
      naziv : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(90)
      ])),
      adresa : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(90)
      ])),
      tip : new FormControl("POZ",Validators.compose([
        Validators.required
      ])),
      opis : new FormControl("")
    })
  }

  potvrdi = function(value){
    console.log(value);
    this.http.post('/app/dodajNoviPozBio', value).subscribe((res) => {
      
      console.log(res['_body']);

      if(res['_body'] != ""){
        this.router.navigate(['']);
      }else{
        alert(res.headers.get('message'))
      }
      
    });
  }

}
