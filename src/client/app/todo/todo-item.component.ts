import { Component, Output, EventEmitter } from '@angular/core' ;

import { iTodo } from './todo.service' ;

@Component({
    selector : 'todo-item',
    template : ` <div>
        <label> New Todo: </label>
        <input type="text" [(ngModel)]="todo.title" (keyup.enter)="add(todo)"/>
        <button (click)="add(todo)">Add</button>
    </div>
    `
})

export class TodoItemComponent {
    private todo : iTodo ;
    @Output() addTodo = new EventEmitter() ;
    
    constructor(){
        this.todo = <iTodo>{title:"", completed:false}
    }
    
    add(todo:iTodo){
        this.addTodo.emit(todo) ;
        this.todo = <iTodo>{title:"", completed:false}
    }
}