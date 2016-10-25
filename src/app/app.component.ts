import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: any = {
    color: '#0f0',
    height: 600,
    width: 800,
    lineWidth: 15
  };
}
