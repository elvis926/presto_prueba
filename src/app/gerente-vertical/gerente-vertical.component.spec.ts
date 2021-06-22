import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteVerticalComponent } from './gerente-vertical.component';

describe('GerenteVerticalComponent', () => {
  let component: GerenteVerticalComponent;
  let fixture: ComponentFixture<GerenteVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenteVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
