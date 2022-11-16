import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBsComponentsPageComponent } from './ngx-bs-components-page.component';

describe('NgxBsComponentsPageComponent', () => {
  let component: NgxBsComponentsPageComponent;
  let fixture: ComponentFixture<NgxBsComponentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBsComponentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBsComponentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
