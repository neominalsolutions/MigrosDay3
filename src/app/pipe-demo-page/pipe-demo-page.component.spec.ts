import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDemoPageComponent } from './pipe-demo-page.component';

describe('PipeDemoPageComponent', () => {
  let component: PipeDemoPageComponent;
  let fixture: ComponentFixture<PipeDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
