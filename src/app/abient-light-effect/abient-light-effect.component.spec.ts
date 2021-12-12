import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbientLightEffectComponent } from './abient-light-effect.component';

describe('AbientLightEffectComponent', () => {
  let component: AbientLightEffectComponent;
  let fixture: ComponentFixture<AbientLightEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbientLightEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbientLightEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
