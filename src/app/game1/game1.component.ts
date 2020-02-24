import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../animals';
@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  public animals = ANIMALS;
  constructor() { }
  ngOnInit() {
  }
}
