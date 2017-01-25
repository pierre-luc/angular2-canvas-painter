import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FireEventService} from "../../fire-event.service";
import {Logger} from "angular2-logger/core";

@Component({
  selector: 'pw-color-selector',
  templateUrl: './pw-color-selector.component.html',
  styleUrls: ['./pw-color-selector.component.scss'],
  providers: [FireEventService]
})
export class PwColorSelectorComponent implements OnInit {

  log: Logger;

  @Input()
  colorList: string[];

  _selectedColor: string;

  @Output() selectedColorChange: EventEmitter<any> = new EventEmitter();

  @Input()
  get selectedColor(){
    return this._selectedColor;
  }

  set selectedColor(color: string){
    this._selectedColor = color;
    this.selectedColorChange.emit(color);
  }

  constructor( private logger: Logger ){
    this.log = logger;
  }

  ngOnInit() {
  }

}
