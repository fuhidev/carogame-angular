import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  readonly N = 4;
  lstValue: string[] = [];
  @Input() isPlayerX = true;
  @Input() nextPlayer = false;
  lstTempHtml: number[] = [];
  lstTempValue: string[][] = [];
  lstTempValue1: string[][] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.N; i++) {
      this.lstTempHtml.push(i);
    }

    for (let i = 0; i < this.N * this.N; i++) {
      this.lstValue.push('');
    }
  }

  clickSquare(i: number) {
    if (this.lstValue[i] !== '') { return; }

    const value: string = this.isPlayerX ? 'X' : 'O';
    this.lstValue[i] = value;

    this.isPlayerX = !this.isPlayerX;

    this.lstTempValue.push([...this.lstValue]);
  }

  clickHistory(i: number) {
    const oldState = this.lstTempValue[i];
    this.lstValue = oldState;

  }
}
