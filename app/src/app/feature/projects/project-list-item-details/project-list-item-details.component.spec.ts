import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListItemDetailsComponent } from './project-list-item-details.component';

describe('ProjectListItemDetailsComponent', () => {
  let component: ProjectListItemDetailsComponent;
  let fixture: ComponentFixture<ProjectListItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectListItemDetailsComponent]
    });
    fixture = TestBed.createComponent(ProjectListItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
