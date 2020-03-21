import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContentChild, TemplateRef } from '@angular/core';

import { Pair } from '../pair';
@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html',
  styleUrls: ['./matching-game.component.css']
})

export class MatchingGameComponent implements OnInit {
  @Input() pairs: Pair[];
  private solvedPairs: Pair[] = [];
  private unsolvedPairs: Pair[] = [];

  @Output() leftpartSelected = new EventEmitter<number>();
  @Output() rightpartSelected = new EventEmitter<number>();
  @Output() leftpartUnselected = new EventEmitter();
  @Output() rightpartUnselected = new EventEmitter();

  @ContentChild('leftpart', { static: false }) leftpart_temp: TemplateRef<any>;
  @ContentChild('rightpart', { static: false }) rightpart_temp: TemplateRef<any>;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.pairs.length; i++) {
      this.unsolvedPairs.push(this.pairs[i]);
    }
  }
}
