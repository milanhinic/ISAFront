import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CentralComponent } from './components/central/central.component';
import { PozBioComponent } from './components/poz-bio/poz-bio.component';

import { PozBioService } from './services/poz-bio.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CentralComponent,
    PozBioComponent,
    RegisterComponent,
    LoginComponent,
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
          path : 'register',
          component : RegisterComponent
        },
        {
          path : 'login',
          component : LoginComponent
        }
      ]
     ),
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [ PozBioService, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
