import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDeSesionComponent } from './inicio-de-sesion.component';

describe('InicioDeSesionComponent', () => {
  let component: InicioDeSesionComponent;
  let fixture: ComponentFixture<InicioDeSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioDeSesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioDeSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
