/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PwCanvasPaintComponent } from './pw-canvas-paint.component';

describe('PwCanvasPaintComponent', () => {
  let component: PwCanvasPaintComponent;
  let fixture: ComponentFixture<PwCanvasPaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwCanvasPaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwCanvasPaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
