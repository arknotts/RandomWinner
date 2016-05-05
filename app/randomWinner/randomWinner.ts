import {Component} from '@angular/core';
import {PersonList} from '../personList/personList';

import {Person} from '../personList/personList'

@Component({
    moduleId: module.id,
    selector: 'random-winner',
    templateUrl: 'randomWinner.html',
    directives: [PersonList]
})

export class RandomWinner {
    
    personList: Person[] = [];
    winnerPerson: Person;
    
    pickWinner() {
        var randIdx = Math.floor(Math.random() * this.personList.length);
        this.winnerPerson = this.personList[randIdx];
    }
    
    onPersonAdded(person: Person) {
        this.personList.push(person);
        
    }
 }
