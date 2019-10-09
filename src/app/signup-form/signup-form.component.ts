import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators } from "@angular/forms";
import {UsernameValidators} from "./username.validators";
import {ContactsService} from "../services/contacts.service";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit{

	contactMethod = [];

	constructor(private readonly  contactMethods: ContactsService) {
		this.contactMethod = this.contactMethods.getContactMethods();
	}

	ngOnInit() {
	}

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',Validators.required, UsernameValidators.shouldBeUnique),
      /*    [
            Validators.required,
           // Validators.minLength(3),
           // UsernameValidators.cannotContainSpace,
            UsernameValidators.shouldBeUnique
          ]),*/
      password: new FormControl('',Validators.required,[UsernameValidators.shouldBeUnique]),
	  contactMethod: new FormControl('',Validators.required)
    })

  });

  	get username(){
    	return this.form.get('account.username');
  	}

	get password(){
		return this.form.get('account.password');
	}

  login(){

  }
}
