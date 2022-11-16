import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponentsPageComponent } from './material-components-page.component';

describe('MaterialComponentsPageComponent', () => {
  let component: MaterialComponentsPageComponent;
  let fixture: ComponentFixture<MaterialComponentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialComponentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialComponentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
