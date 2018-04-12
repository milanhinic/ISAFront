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
  private idSala : number;
  private sala: any;
  // 0 => dodavanje, 1 => izmena
  private mode: number;

  constructor(private http:Http, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let niz = this.router.url.split('/');
    this.idSala = -1;

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

    for(let i = 0; i < niz.length; i++){
      if(niz[i] === 'izmeniSalu'){

        this.mode = 1;

        this.route.params.subscribe(params => {
          this.idSala = +params['id'];
        });

        this.http.get('/app/vratiJednuSalu/'+this.idSala).subscribe((res) => {

          if(res['_body'] != ""){
            this.sala = res.json();
            this.salaForma.patchValue({naziv: this.sala.naziv});
          }else{
            alert(res.headers.get('message'))
          }
      
        });

        break;

      }else if(niz[i] === 'dodajSalu'){
        this.mode = 0;
        break;
      }else{
        this.mode = -1;
      }
    }

  }

  potvrdi = function(sala:any){

    console.log(sala)
    console.log(this.sala)
    
    if(this.mode != -1){
      if(this.mode == 0){

        this.http.post('/app/dodajSalu/'+this.idPozBio, sala).subscribe((res) => {   

          if(res['_body'] != ""){
            this.router.navigate([this.router.url]);
          }else{
            alert(res.headers.get('message'))
          }
      
        });

      }else{
        this.sala.naziv = sala.naziv;
        this.http.put('/app/izmeniSalu/'+this.idSala, this.sala).subscribe((res) => {   

          if(res['_body'] != ""){
            this.router.navigate([this.router.url]);
          }else{
            alert(res.headers.get('message'))
          }
      
        });
      }
    }

  }
}

