import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFancyExampleComponent } from './card-fancy-example.component';

describe('CardFancyExampleComponent', () => {
  let component: CardFancyExampleComponent;
  let fixture: ComponentFixture<CardFancyExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFancyExampleComponent]
    });
    fixture = TestBed.createComponent(CardFancyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
