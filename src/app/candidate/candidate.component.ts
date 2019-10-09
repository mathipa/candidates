import {Component, OnInit, LOCALE_ID, Inject, } from '@angular/core';
import {CandidatesService} from "../services/candidates.service";
import {ICandidate} from "../interfaces/ICandidate";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

	candidate: ICandidate;
	candidateImageUrl;
	label;
	value;
	defaultActive = true;


	constructor( @Inject(LOCALE_ID) private readonly locale: string,
				 private readonly candidatesService: CandidatesService) {
	}

	ngOnInit() {
		this.candidatesService.getCandidates().then(response => {
				this.candidate = response[0];
				this.candidateImageUrl = this.candidate.picture.large;
				this.mouseEnterHandler('user');
			}
		);
	}

	mouseEnterHandler(anchorName) {
		switch (anchorName) {
			case 'user':
				this.label = "Hi, My name is";
				this.value = `${this.candidate.name.first} ${this.candidate.name.last}`;
				break;
			case 'email':
				this.defaultActive = false;
				this.label = "My email address is";
				this.value = `${this.candidate.email}`;
				break;
			case 'calendar':
				this.defaultActive = false;
				this.label = "My birthday is";
				this.value = formatDate(this.candidate.dob.date, "dd/MM/yyyy", this.locale);
				break;
			case 'map-location':
				this.defaultActive = false;
				this.label = "My address is";
				this.value = `${this.candidate.location.city}`;
				break;
			case 'call':
				this.defaultActive = false;
				this.label = "My phone number is";
				this.value = `${this.candidate.phone}`;
				break;
			case 'locked':
				this.defaultActive = false;
				this.label = "My password is";
				this.value = `${this.candidate.login.password}`;
				break;
			default:
		}
	}
}
