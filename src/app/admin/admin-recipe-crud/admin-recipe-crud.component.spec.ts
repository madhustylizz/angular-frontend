import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecipeCrudComponent } from './admin-recipe-crud.component';

describe('AdminRecipeCrudComponent', () => {
  let component: AdminRecipeCrudComponent;
  let fixture: ComponentFixture<AdminRecipeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecipeCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecipeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
