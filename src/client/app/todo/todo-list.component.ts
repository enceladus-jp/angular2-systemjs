import { Component, Input, Output, EventEmitter } from '@angular/core' ;

@Component({
    selector : 'todo-list',
    template : `
        <div *ngFor="let item of todoStuff">
            <p>
                <input type="checkbox" [checked]="item.completed"/> 
                <span [class.completed]="item.completed">
                    {{item.title}}
                </span>
                <button (click)="deleteTodo.emit(item)">Delete</button>
           </p>
        </div>
    `
})


export class TodoListComponent {
    @Input() todoStuff : Array<string> ;
    @Output() deleteTodo = new EventEmitter() ;
}