import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { provide }           from 'angular2/core';

import { PersonService } from './person.service';
import { PersonComponent } from './person.component';

@Component({
  selector: 'my-app',
  templateUrl: 'views/index.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    PersonService,
    HTTP_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/persons',
    name: 'Persons',
    component: PersonComponent,
    useAsDefault: true
  },
  {
    path: '/person/:id',
    name: 'PersonDetail',
    component: PersonComponent
  }
])
export class AppComponent {
}