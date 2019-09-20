import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {

	@Input() label;
	@Input() value;

	constructor() {
	}

	ngOnInit() {
	}

}
