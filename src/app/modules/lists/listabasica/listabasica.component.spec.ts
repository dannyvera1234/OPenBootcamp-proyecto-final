import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListabasicaComponent } from './listabasica.component';

describe('ListabasicaComponent', () => {
  let component: ListabasicaComponent;
  let fixture: ComponentFixture<ListabasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListabasicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListabasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
