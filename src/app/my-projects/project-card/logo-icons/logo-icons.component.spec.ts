import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoIconsComponent } from './logo-icons.component';

describe('LogoIconsComponent', () => {
  let component: LogoIconsComponent;
  let fixture: ComponentFixture<LogoIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
