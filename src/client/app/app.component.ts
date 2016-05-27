import { Component } from '@angular/core' ;
import { TodosComponent } from './todo/todos.component' ;
import { HTTP_PROVIDERS } from '@angular/http' ;

@Component({
    selector: 'my-app',
    template: `<h1>Hello World!</h1>
    <todos></todos>
    `,
    directives : [TodosComponent],
    providers : [HTTP_PROVIDERS]
})

export class AppComponent {
    
}