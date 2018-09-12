//We use import keyword to import modules we want to use
import { Component, OnInit} from '@angular/core';
import { Goal } from './goal';

//Annotation are ways to add functionality. we use @component annotation
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'//,
  // styleUrls: ['./app.component.css']
})
//javascript class that will be used to define logic of component
export class AppComponent {
  // title = 'my-app';
  //goals: string[];
  // constructor(){
  //   this.goals = ["Watch Finding Nemo", "Buy cookies", "Get new phone case"];
  // }


  constructor(){ }
  ngOnInit(){

  }
}
