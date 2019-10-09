import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { AnchorComponent } from './anchor/anchor.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import {LoginComponent} from "./login/login.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SignupFormComponent} from "./signup-form/signup-form.component";
import {ContactsService} from "./services/contacts.service";
import {ListCandidatesServices} from "./services/listCandidates.services";
import {FavouriteComponent} from "./favourite/favourite.component";
import {AuthService} from "./services/auth.service";
import {AuthHttp} from "angular2-jwt/angular2-jwt";


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CandidateDetailsComponent,
    AnchorComponent,
	LoginComponent,
    CandidatesListComponent,
	routingComponent,
	NavbarComponent,
	NotFoundComponent,
	SignupFormComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forRoot([
	  {
		  path: '',
		  component:  CandidateComponent
	  },
	  {
		  path: 'candidates',
		  component:  CandidateDetailsComponent
	  },
	  {
		  path: 'login',
		  component: LoginComponent
	  },
	  {
	  	  path: 'sign-up',
		  component: SignupFormComponent
	  },
	  {
		  path: '**',
		  component:  NotFoundComponent
	  },
	  ])
  ],
  providers: [
  	ContactsService,
	ListCandidatesServices,
	AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
