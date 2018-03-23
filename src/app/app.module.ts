import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CentralComponent } from './components/central/central.component';
import { PozBioComponent } from './components/poz-bio/poz-bio.component';

import { PozBioService } from './services/poz-bio.service';


@NgModule({
  declarations: [
    AppComponent,
    CentralComponent,
    PozBioComponent,
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
        }
      ]
     )
  ],
  providers: [ PozBioService, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
