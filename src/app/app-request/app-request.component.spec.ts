import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRequestComponent } from './app-request.component';

describe('AppRequestComponent', () => {
  let component: AppRequestComponent;
  let fixture: ComponentFixture<AppRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
