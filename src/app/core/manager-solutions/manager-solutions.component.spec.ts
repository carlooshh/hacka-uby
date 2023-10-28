import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSolutionsComponent } from './manager-solutions.component';

describe('ManagerSolutionsComponent', () => {
  let component: ManagerSolutionsComponent;
  let fixture: ComponentFixture<ManagerSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerSolutionsComponent]
    });
    fixture = TestBed.createComponent(ManagerSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
