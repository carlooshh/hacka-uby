import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaFormComponent } from './idea-form.component';

describe('IdeaFormComponent', () => {
  let component: IdeaFormComponent;
  let fixture: ComponentFixture<IdeaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaFormComponent]
    });
    fixture = TestBed.createComponent(IdeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
