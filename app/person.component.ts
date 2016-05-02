import {Component} from 'angular2/core';
import { PersonService } from './person.service';

@Component({
	templateUrl: "views/person.html"
})
export class PersonComponent {
	private persons: PersonComponent[];
	constructor(peopleService: PersonService) {
		this.persons = [
			{ id: 1, name:'Jayr', phone:"8786732"},
			{id: 2, name:"teste", phone:"898989"}
		];
		peopleService.people
	     .subscribe(
	       people => this.people = people,
		      error => console.error('Error: '),
	       () => console.log('Completed!')
      	);
	}
	edit(data) {
		console.log(data);
	}
}