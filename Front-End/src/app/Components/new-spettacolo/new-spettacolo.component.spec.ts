import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpettacoloComponent } from './new-spettacolo.component';

describe('NewSpettacoloComponent', () => {
  let component: NewSpettacoloComponent;
  let fixture: ComponentFixture<NewSpettacoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpettacoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpettacoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
