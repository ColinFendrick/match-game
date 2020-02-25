import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../animals';
@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
  public animals = ANIMALS;
  constructor() { }
  ngOnInit() {
  }
}
