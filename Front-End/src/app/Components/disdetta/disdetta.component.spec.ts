import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisdettaComponent } from './disdetta.component';

describe('DisdettaComponent', () => {
  let component: DisdettaComponent;
  let fixture: ComponentFixture<DisdettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisdettaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisdettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
