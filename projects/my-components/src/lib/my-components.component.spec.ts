import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsComponent } from './my-components.component';

describe('MyComponentsComponent', () => {
  let component: MyComponentsComponent;
  let fixture: ComponentFixture<MyComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
