import { Component, OnInit } from '@angular/core';
import {SmokerLifeCycleService} from './smoker-life-cycle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  title = 'app';
  constructor (private smoker: SmokerLifeCycleService) {

  }
  ngOnInit(): void {
    this.smoker.createSmoker().subscribe((smokerLife) => console.log (smokerLife));
  }

}
