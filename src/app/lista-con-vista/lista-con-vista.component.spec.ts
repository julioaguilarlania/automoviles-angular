import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConVistaComponent } from './lista-con-vista.component';

describe('ListaConVistaComponent', () => {
  let component: ListaConVistaComponent;
  let fixture: ComponentFixture<ListaConVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConVistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaConVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
