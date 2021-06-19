import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicoesCardComponent } from './instituicoes-card.component';

describe('InstituicoesCardComponent', () => {
  let component: InstituicoesCardComponent;
  let fixture: ComponentFixture<InstituicoesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituicoesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicoesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
