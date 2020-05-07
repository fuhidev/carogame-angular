import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.x();
  }
  ngOnInit() {

  }

  x() {
    const span = document.body.querySelector('span');
    if (span) {
      span.innerText = span.innerText.replace('nextPlayer', 'Người chơi tiếp theo');
    }
  }

}
