import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGetterComponent } from './request-getter.component';

describe('RequestGetterComponent', () => {
  let component: RequestGetterComponent;
  let fixture: ComponentFixture<RequestGetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestGetterComponent]
    });
    fixture = TestBed.createComponent(RequestGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
