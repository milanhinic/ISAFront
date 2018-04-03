import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dodaj-izmeni-salu',
  templateUrl: './dodaj-izmeni-salu.component.html',
  styleUrls: ['./dodaj-izmeni-salu.component.css']
})
export class DodajIzmeniSaluComponent implements OnInit {

  public idPozBio: number;
  private salaForma: any;

  constructor(private http:Http, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.idPozBio = +params['id'];
    });

    this.salaForma = new FormGroup({
      naziv : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(90)
      ]))
    })

  }

  potvrdi = function(sala:any){
    console.log(sala)
    this.http.post('/app/dodajSalu/'+this.idPozBio, sala).subscribe((res) => {
          
      console.log(res['_body'])

      if(res['_body'] != ""){
        this.router.navigate([this.router.url]);
      }else{
        alert(res.headers.get('message'))
      }
  
    });

  }
}

