import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AlertComponent } from './directives/alert.component';
import { AlertService } from './services/alert.service';
import { OglasiService } from './services/oglasi.service'

import { AppComponent } from './app.component';
import { CentralComponent } from './components/central/central.component';
import { PozBioComponent } from './components/poz-bio/poz-bio.component';
import { NoviPozBioComponent } from './components/novi-poz-bio/novi-poz-bio.component';

import { PozBioService } from './services/poz-bio.service';
import { AdminServiceService } from './services/admin-service.service';
import { RegisterService } from './services/register.service';
import { PrijavljenKorisnikService } from './services/prijavljen-korisnik.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PozBioPreviewComponent } from './components/poz-bio-preview/poz-bio-preview.component';
import { UspesnaRegistracijaComponent } from './components/uspesna-registracija/uspesna-registracija.component';
import { AktiviranNalogComponent } from './components/aktiviran-nalog/aktiviran-nalog.component';
import { DodajIzmeniSaluComponent } from './components/dodaj-izmeni-salu/dodaj-izmeni-salu.component';
import { ProfilComponent } from './components/profil/profil.component';
import { PrijateljiComponent } from './components/prijatelji/prijatelji.component';
import { NoviAdmFzComponent } from './components/novi-adm-fz/novi-adm-fz.component';
import { NoviAdmSisComponent } from './components/novi-adm-sis/novi-adm-sis.component';
import { AdminFzComponent } from './components/admin-fz/admin-fz.component';
import { FanZonaComponent } from './components/fan-zona/fan-zona.component';
import { NoviOglasComponent } from './components/novi-oglas/novi-oglas.component';
import { SalaPreviewComponent } from './components/sala-preview/sala-preview.component';
import { DodajIzmeniSegmentComponent } from './components/dodaj-izmeni-segment/dodaj-izmeni-segment.component';
import { TipSegmentaComponent } from './components/tip-segmenta/tip-segmenta.component';
import { NoviPredFilmComponent } from './components/novi-pred-film/novi-pred-film.component';


@NgModule({
  declarations: [
    AppComponent,
    CentralComponent,
    PozBioComponent,
    RegisterComponent,
    LoginComponent,
    PozBioPreviewComponent,
    UspesnaRegistracijaComponent,
    AktiviranNalogComponent,
    AlertComponent,
    NoviPozBioComponent,
    DodajIzmeniSaluComponent,
    ProfilComponent,
    PrijateljiComponent,
    NoviAdmFzComponent,
    NoviAdmSisComponent,
    AdminFzComponent,
    FanZonaComponent,
    NoviOglasComponent,
    SalaPreviewComponent,
    DodajIzmeniSegmentComponent,
    TipSegmentaComponent,
    NoviPredFilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path : 'pozorista/stranica/:id',
          component : PozBioComponent
        },
        {
          path : 'bioskopi/stranica/:id',
          component : PozBioComponent
        },
        {
          path : 'pozorista/pozoriste/:id',
          component : PozBioPreviewComponent
        },
        {
          path : 'bioskopi/bioskop/:id',
          component : PozBioPreviewComponent
        },
        {
          path : 'register',
          component : RegisterComponent
        },
        {
          path : 'login',
          component : LoginComponent
        },
        {
          path :'uspesnaRegistracija',
          component : UspesnaRegistracijaComponent
        },
        {
          path : 'aktiviranNalog',
          component : AktiviranNalogComponent
        },
        {
          path : 'noviPozBio',
          component : NoviPozBioComponent
        },
        {
          path : 'dodajSalu/poz_bio/:id',
          component : DodajIzmeniSaluComponent
        },
        {
          path : 'izmeniSalu/:id',
          component : DodajIzmeniSaluComponent
        },
        {
          path : "profil",
          component : ProfilComponent
        },
        {
          path : "prijatelji",
          component : PrijateljiComponent
        },
        {
          path : "noviAdmFz",
          component : NoviAdmFzComponent
        },
        {
          path : "noviAdmSis",
          component : NoviAdmSisComponent
        },
        {
          path : "adminFz/stranica/:id",
          component : AdminFzComponent
        },
        {
          path : "adminSi/stranica/:id",
          component : AdminFzComponent
        },
        {
          path : "fanzona",
          component : FanZonaComponent
        },
        {
          path : "noviOglas",
          component : NoviOglasComponent
        },
        {
          path : '',
          component : CentralComponent
        },
          path : 'izmeniPozBio/:id',
          component : NoviPozBioComponent
        },
        {
          path : 'sala/:id',
          component : SalaPreviewComponent
        },
        {
          path : 'noviPredFilm',
          component : NoviPredFilmComponent
        },
        {
          path : 'izmeniPredFilm/:id',
          component : NoviPredFilmComponent
        }
      ]
     ),
     FormsModule,
     ReactiveFormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXBX98N0e-Hh2Yvv1dgTcTnS5CLbUJIvY'
    })
  ],
  providers: [ PozBioService, OglasiService, AdminServiceService,RegisterService, HttpClientModule, AlertService, PrijavljenKorisnikService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
