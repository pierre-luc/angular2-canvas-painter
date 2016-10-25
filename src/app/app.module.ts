import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PwColorSelectorComponent } from './pw-color-selector/pw-color-selector.component';
import { PwCanvasPaintComponent } from './pw-canvas-paint/pw-canvas-paint.component';
import {Logger, LOG_LOGGER_PROVIDERS} from "angular2-logger/core";
import { PwWidthSelectorComponent } from './pw-width-selector/pw-width-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    PwColorSelectorComponent,
    PwCanvasPaintComponent,
    PwWidthSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LOG_LOGGER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
