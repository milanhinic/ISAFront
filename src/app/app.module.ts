import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CentralComponent } from './central/central.component';


@NgModule({
  declarations: [
    AppComponent,
    CentralComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path : '',
          component : CentralComponent
        }
      ]
     )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
