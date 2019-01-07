import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Subir uma montanha', 'Pular de paraquedas', 'Conhecer outro pais']);
  goal = this.goals;

  constructor() { }

  changeGoal(goal){
  	this.goal.next(goal);
  }
}
