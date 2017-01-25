import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PwColorSelectorComponent} from "./pw-color-selector/pw-color-selector.component";
import {PwCanvasPaintComponent} from "./pw-canvas-paint/pw-canvas-paint.component";
import {PwWidthSelectorComponent} from "./pw-width-selector/pw-width-selector.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PwColorSelectorComponent,
    PwCanvasPaintComponent,
    PwWidthSelectorComponent
  ],
  exports: [
    PwColorSelectorComponent,
    PwCanvasPaintComponent,
    PwWidthSelectorComponent
  ]
})
export class AngularCanvasPainterModule { }
