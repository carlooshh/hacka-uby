/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashManageComponent } from './dash-manage.component';

describe('DashManageComponent', () => {
  let component: DashManageComponent;
  let fixture: ComponentFixture<DashManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
