import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AlertComponent } from './directives/alert.component';
import { AlertService } from './services/alert.service';

import { AppComponent } from './app.component';
import { CentralComponent } from './components/central/central.component';
import { PozBioComponent } from './components/poz-bio/poz-bio.component';
import { NoviPozBioComponent } from './components/novi-poz-bio/novi-poz-bio.component';

import { PozBioService } from './services/poz-bio.service';
import { RegisterService } from './services/register.service';
import { PrijavljenKorisnikService } from './services/prijavljen-korisnik.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PozBioPreviewComponent } from './components/poz-bio-preview/poz-bio-preview.component';
import { UspesnaRegistracijaComponent } from './components/uspesna-registracija/uspesna-registracija.component';
import { AktiviranNalogComponent } from './components/aktiviran-nalog/aktiviran-nalog.component';
import { ProfilComponent } from './components/profil/profil.component';


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
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path : '',
          component : CentralComponent
        },
        {
          path : 'pozorista/stranica/:id',
          component : PozBioComponent
        },
        {
          path : 'bioskopi/stranica/:id',
          component : PozBioComponent
        },
        {
          path : 'pozorista/stranica/:id/:id',
          component : PozBioPreviewComponent
        },
        {
          path : 'bioskopi/stranica/:id/:id',
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
          path : "profil",
          component : ProfilComponent
        }
      ]
     ),
     FormsModule,
     ReactiveFormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXBX98N0e-Hh2Yvv1dgTcTnS5CLbUJIvY'
    })
  ],
  providers: [ PozBioService, RegisterService, HttpClientModule, AlertService, PrijavljenKorisnikService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
