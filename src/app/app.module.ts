import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { AnchorComponent } from './anchor/anchor.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CandidateDetailsComponent,
    AnchorComponent,
    CandidatesListComponent,
	  routingComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
