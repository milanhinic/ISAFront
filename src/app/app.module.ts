import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
import { DodajIzbrisiSedistaComponent } from './components/dodaj-izbrisi-sedista/dodaj-izbrisi-sedista.component';
import { DodajIzmeniProjekcijuComponent } from './components/dodaj-izmeni-projekciju/dodaj-izmeni-projekciju.component';
import { SortPozBioPipe } from './pipes/sort-poz-bio.pipe';
import { OdobriOglaseComponent } from './components/odobri-oglase/odobri-oglase.component';
import { OglasiPreviewComponent } from './components/oglasi-preview/oglasi-preview.component';
import { RezervacijeComponent } from './components/rezervacije/rezervacije.component';
import { ProjekcijaPreviewComponent } from './components/projekcija-preview/projekcija-preview.component';
import { RezervacijaGlavnaComponent } from './components/rezervacija-glavna/rezervacija-glavna.component';
import { RezervacijaMestoComponent } from './components/rezervacija-mesto/rezervacija-mesto.component';
import { RezervacijaPrijateljiComponent } from './components/rezervacija-prijatelji/rezervacija-prijatelji.component';
import { KartaService } from './services/karta.service';
import { DajGlasComponent } from './components/daj-glas/daj-glas.component';
import { FilmPredPreviewComponent } from './components/film-pred-preview/film-pred-preview.component';
import { IzmeniOglasComponent } from './components/izmeni-oglas/izmeni-oglas.component';
import { IzmenaPodatakaComponent } from './components/izmena-podataka/izmena-podataka.component';
import { PonudiComponent } from './components/ponudi/ponudi.component';
import { PromeniLozinkuComponent } from './components/promeni-lozinku/promeni-lozinku.component';
import { IzvestajiPreviewComponent } from './components/izvestaji-preview/izvestaji-preview.component';
import { IzvestajChartComponent } from './components/izvestaj-chart/izvestaj-chart.component';

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
    NoviPredFilmComponent,
    DodajIzbrisiSedistaComponent,
    NoviPredFilmComponent,
    SortPozBioPipe,
    OdobriOglaseComponent,
    OglasiPreviewComponent,
    RezervacijeComponent,
    DodajIzmeniProjekcijuComponent,
    SortPozBioPipe,
    ProjekcijaPreviewComponent,
    RezervacijaGlavnaComponent,
    RezervacijaGlavnaComponent,
    RezervacijaMestoComponent,
    RezervacijaPrijateljiComponent,
    DajGlasComponent,
    FilmPredPreviewComponent,
    IzmeniOglasComponent,
    IzmenaPodatakaComponent,
    PonudiComponent,
    PromeniLozinkuComponent,
    IzvestajiPreviewComponent,
    IzvestajChartComponent
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
          path : "fanzona/stranica/:id",
          component : FanZonaComponent
        },
        {
          path : "noviOglas",
          component : NoviOglasComponent
        },
        {
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
        },
        {
          path : 'odobriOglase/stranica/:id',
          component : OdobriOglaseComponent
        },
        {
          path : 'odobriOglase/stranica/:id',
          component : OdobriOglaseComponent
        },
        {
          path : 'pregledajOglas/:id',
          component : OglasiPreviewComponent
        },
        {  
          path : 'rezervacije',
          component : RezervacijeComponent
        },
        {  
          path : 'izmeniOglas/:id',
          component : IzmeniOglasComponent
        },
        {  
          path : 'izmenaPodataka',
          component : IzmenaPodatakaComponent
        },
        {  
          path : 'ponudi/:id',
          component : PonudiComponent
        },
        {  
          path : 'promeniLozinku',
          component : PromeniLozinkuComponent
        },
        {
          path : 'rezervisi/:id',
          component : RezervacijaGlavnaComponent
        },
        {
          path : '',
          component : CentralComponent
        },
        {
          path : 'predFilm/:id',
          component : FilmPredPreviewComponent
        },
        {
          path : 'izvestaji',
          component : IzvestajiPreviewComponent
        }
      ]
     ),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXBX98N0e-Hh2Yvv1dgTcTnS5CLbUJIvY'
    }),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [ PozBioService, OglasiService, AdminServiceService,RegisterService, HttpClientModule, AlertService, PrijavljenKorisnikService, KartaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
