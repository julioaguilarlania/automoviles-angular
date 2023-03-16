import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAutomovilComponent } from './tarjeta-automovil.component';

describe('TarjetaAutomovilComponent', () => {
  let component: TarjetaAutomovilComponent;
  let fixture: ComponentFixture<TarjetaAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
