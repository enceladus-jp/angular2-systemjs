import { Injectable } from '@angular/core' ;
import { Http, Response } from '@angular/http' ;

import {Observable} from 'rxjs/Observable';

export interface iTodo {
    title : string ;
    completed : Boolean ;
}


@Injectable()
export class TodoService {
    public todos : Array<iTodo> ;
    
    constructor(private _http : Http) {
        
    }
    
    // getTodos() {
    //     return this._http.get('./app/todo/todo.json')
    //         .map((response:Response) => <iTodo[]>response.json().data)
    //         .catch(this.handleError)
            
    // }
    
    // private handleError (error: any) {
    //     let errMsg = error.message || error.statusText || 'Server error';
    //     console.error(errMsg); // log to console instead
    //     return Observable.throw(errMsg);
    // }
}