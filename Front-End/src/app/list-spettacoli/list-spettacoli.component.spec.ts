import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpettacoliComponent } from './list-spettacoli.component';

describe('ListSpettacoliComponent', () => {
  let component: ListSpettacoliComponent;
  let fixture: ComponentFixture<ListSpettacoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSpettacoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpettacoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
