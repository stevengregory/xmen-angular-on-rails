/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MutantListComponent } from './mutant-list.component';

describe('MutantListComponent', () => {
  let component: MutantListComponent;
  let fixture: ComponentFixture<MutantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
