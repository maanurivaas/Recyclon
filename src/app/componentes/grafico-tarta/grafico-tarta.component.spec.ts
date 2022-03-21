import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTartaComponent } from './grafico-tarta.component';

describe('GraficoTartaComponent', () => {
  let component: GraficoTartaComponent;
  let fixture: ComponentFixture<GraficoTartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoTartaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoTartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
