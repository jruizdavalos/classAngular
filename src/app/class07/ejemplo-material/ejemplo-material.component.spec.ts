import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploMaterialComponent } from './ejemplo-material.component';

describe('EjemploMaterialComponent', () => {
  let component: EjemploMaterialComponent;
  let fixture: ComponentFixture<EjemploMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
