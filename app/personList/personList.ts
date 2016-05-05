import {Component, EventEmitter, Input, Output} from '@angular/core';

export class Person {
    name: String;
}

@Component({
    moduleId: module.id,
    selector: 'person-list',
    templateUrl: 'personList.html'
})

export class PersonList {
    
    persons: Person[] = [];
    
    newPerson: Person = new Person();
    @Output() onPersonAdded = new EventEmitter<Person>();
    
    add() {
        this.persons.push(this.newPerson);
        
        this.newPerson = new Person();
        
        this.onPersonAdded.emit(this.persons[this.persons.length-1]);
    }
 }
