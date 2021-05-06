import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativeLinesComponent } from './decorative-lines.component';

describe('DecorativeLinesComponent', () => {
  let component: DecorativeLinesComponent;
  let fixture: ComponentFixture<DecorativeLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorativeLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativeLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
