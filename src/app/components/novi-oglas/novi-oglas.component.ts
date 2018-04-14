import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novi-oglas',
  templateUrl: './novi-oglas.component.html',
  styleUrls: ['./novi-oglas.component.css']
})
export class NoviOglasComponent implements OnInit {

  noviOglasForma : any;

  constructor(private http:Http, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.noviOglasForma = new FormGroup({
      naziv : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(90)
      ])),
      opis : new FormControl(""),
      datum : new FormControl(""),
      putanja : new FormControl("")
    })

  }


  potvrdi = function(value){
    console.log(value);
    /*
    this.http.post('/app/dodajNoviPozBio', value).subscribe((res) => {

      if(res['_body'] != ""){
        let novaSala = res.json();
        this.router.navigate(['']);
      }else{
        alert(res.headers.get('message'))
      }
      
    });
    */
  }

}
