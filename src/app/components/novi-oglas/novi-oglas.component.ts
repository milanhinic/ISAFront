import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  file : any;

  @ViewChild('file') fileInput: ElementRef;

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

  /*
  potvrdi = function(value){
    console.log(value);
    
    this.http.post('/app/dodajNoviPozBio', value).subscribe((res) => {

      if(res['_body'] != ""){
        let novaSala = res.json();
        this.router.navigate(['']);
      }else{
        alert(res.headers.get('message'))
      }
      
    });
    
  }
  */

  onFileChange(event) {
    if(event.target.files.length > 0) {
      this.file = event.target.files[0];
      //this.noviOglasForma.get('putanja').setValue(file);
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('naziv', this.noviOglasForma.get('naziv').value);
    input.append('opis', this.noviOglasForma.get('opis').value);
    input.append('datum', this.noviOglasForma.get('datum').value);
    input.append('putanja', this.file);
    return input;
  }

  posalji() {
    const formModel = this.prepareSave();
    
    this.http.post('/app/sacuvajOglas',formModel).subscribe((res) => {
      
      if(res['_body'] != ""){
        this.router.navigate(['']);
      }else{
        alert(res.headers.get('message'))
      }

    });


  }


}
