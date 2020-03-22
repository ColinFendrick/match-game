import { Component, OnInit } from '@angular/core';
import { ANIMALS } from '../animals';
@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  public animals = ANIMALS;
  constructor() {}
  ngOnInit() {}

  leftpartSelectedId:number = -1;
  rightpartSelectedId:number = -1;

  onLeftpartSelected(id: number): void {
    this.leftpartSelectedId = id;
  }

  onRightpartSelected(id: number): void {
    this.rightpartSelectedId = id;
  }

  onLeftpartUnselected(): void {
    this.leftpartSelectedId = -1;
  }

  onRightpartUnselected(): void {
    this.rightpartSelectedId = -1;
  }
}
