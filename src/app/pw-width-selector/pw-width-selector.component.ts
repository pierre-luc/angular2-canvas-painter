import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Logger} from "angular2-logger/core";
import {log} from "util";

@Component({
  selector: 'pw-width-selector',
  templateUrl: './pw-width-selector.component.html',
  styleUrls: ['./pw-width-selector.component.scss']
})
export class PwWidthSelectorComponent implements OnInit {

  private _value: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Input() min: any;
  @Input() max: any;
  @Input() step: any;

  log: Logger;

  constructor(private logger: Logger) {
    this.log = logger;
  }

  ngOnInit() {
    this.min = 0;
    this.step = 5;
    this.max = 50;
    this._value = 20;
  }

  @Input()
  get value(): any {
    return this._value;
  }

  set value(value: any) {
    if (value != this._value){
      this._value = value;
      this.valueChange.emit(value);
    }
  }
}
