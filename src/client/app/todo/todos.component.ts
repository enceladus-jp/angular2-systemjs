import { Component } from '@angular/core' ;

import { TodoListComponent } from './todo-list.component' ;
import { TodoService, iTodo } from './todo.service' ;
import { TodoItemComponent } from './todo-item.component' ;

@Component({
    selector : 'todos',
    template : `<todo-item (addTodo)="addTodo($event)" ></todo-item>
    <todo-list [todoStuff]="todoStuff" (deleteTodo)="deleteTodo($event)">/<todo-list>`,
    directives : [TodoListComponent, TodoItemComponent],
    providers : [TodoService]
})


export class TodosComponent {
    public todoStuff : Array<iTodo> ;
    
    constructor(private _todoService : TodoService){
        this.getTodos() ;
    }
    
    getTodos(){
        this.todoStuff = [
            <iTodo>{title : "Write package.json", completed : false},
            <iTodo>{title : "Write tsconfig.json", completed : false},
            <iTodo>{title : "Write typings.json", completed : false},
            <iTodo>{title : "Finalize module loader config", completed : false},
            <iTodo>{title : "Other stuff", completed : false}
        ]
    }
    
    addTodo(todo : iTodo){
        this.todoStuff.push(todo) ;
    }
    
    deleteTodo(todo : iTodo){
        this.todoStuff.splice(this.todoStuff.indexOf(todo)) ;
    }
}