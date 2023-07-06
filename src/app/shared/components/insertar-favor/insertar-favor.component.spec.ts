import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarFavorComponent } from './insertar-favor.component';

describe('InsertarFavorComponent', () => {
  let component: InsertarFavorComponent;
  let fixture: ComponentFixture<InsertarFavorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarFavorComponent]
    });
    fixture = TestBed.createComponent(InsertarFavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
