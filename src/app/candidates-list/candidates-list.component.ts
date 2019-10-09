import { Component, OnInit } from '@angular/core';
import {ListCandidatesServices} from "../services/listCandidates.services";
import {IFilter} from "../interfaces/IFilter";

@Component({
  selector: 'candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

	constructor(
		private readonly  service: ListCandidatesServices) {

		this.filteredCandidates = this.candidates;
		this.listFilter = '';
	}

	ngOnInit() {
		this.service.getAll()
			.subscribe(candidates => this.candidates = candidates);
		console.log(this.candidates);
	}

	candidates: any[];
	pageTitle= "Candidates List";
	_listFilter = '';
	get listFilter(): string {
		return this._listFilter;
	}

	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredCandidates = this.listFilter ? this.doFilter(this.listFilter) : this.candidates;
	}

	filteredCandidates: IFilter[] = [];


	doFilter(filterBy: string): IFilter[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.candidates.filter((myCandidate: IFilter) =>
			myCandidate.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}

}
