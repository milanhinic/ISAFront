import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { CentralComponent } from './central/central.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CentralComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path : '',
          component : CentralComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
