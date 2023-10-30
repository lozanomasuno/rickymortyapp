import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesComponent } from './personajes.component';

describe('PersonajesComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
   const fixture = TestBed.createComponent(PersonajesComponent);
   const app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería retornar búsqueda correcta', () => {
    const fixture = TestBed.createComponent(PersonajesComponent);
    const app = fixture.componentInstance;
    let keyword = app.keyword;
    !keyword.length
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
