import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() value: string;
  @Input() index: number;
  @Output() clicked = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(e) {
    this.clicked.emit(this.index);
  }

}
