import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatesListComponent} from "./candidates-list/candidates-list.component";
import {CandidateComponent} from "./candidate/candidate.component";


const routes: Routes = [
	{path: '', component : CandidateComponent},
	{path: 'candidates', component: CandidatesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
	CandidatesListComponent,
	CandidateComponent
];
