import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CentralComponent } from './components/central/central.component';
import { PozBioComponent } from './components/poz-bio/poz-bio.component';

import { PozBioService } from './services/poz-bio.service';
import { RegisterService } from './services/register.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PozBioPreviewComponent } from './components/poz-bio-preview/poz-bio-preview.component';
import { UspesnaRegistracijaComponent } from './components/uspesna-registracija/uspesna-registracija.component';
import { AktiviranNalogComponent } from './components/aktiviran-nalog/aktiviran-nalog.component';


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
          path : 'pozorista',
          component : PozBioComponent
        },
        {
          path : 'bioskopi',
          component : PozBioComponent
        },
        {
          path : 'pozorista/:id',
          component : PozBioPreviewComponent
        },
        {
          path : 'bioskopi/:id',
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
        }
      ]
     ),
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [ PozBioService, RegisterService, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
