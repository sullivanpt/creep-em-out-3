/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';


import { MaterialTestComponent } from './material-test.component';

describe('MaterialTestComponent', () => {
  let component: MaterialTestComponent;
  let fixture: ComponentFixture<MaterialTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialTestComponent],
      imports: [MaterialModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
