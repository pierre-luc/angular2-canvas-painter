import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Logger, LOG_LOGGER_PROVIDERS} from "angular2-logger/core";
import {AngularCanvasPainterModule} from "./ng2-angular-canvas-painter/ng2-angular-canvas-painter.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularCanvasPainterModule
  ],
  providers: [LOG_LOGGER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
