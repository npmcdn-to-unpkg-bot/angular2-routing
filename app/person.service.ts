import {Injectable}     from 'angular2/core';
import {Observable}     from 'rxjs/Observable';
import {Http} from 'angular2/http';

@Injectable()
export class PersonService {
	constructor(http: Http) {
		this.people = http.get('api/persons')
      .map(response => response.json());
  }
}