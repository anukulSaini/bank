import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingExampleComponent } from './two-way-binding-example.component';

describe('TwoWayBindingExampleComponent', () => {
  let component: TwoWayBindingExampleComponent;
  let fixture: ComponentFixture<TwoWayBindingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayBindingExampleComponent]
    });
    fixture = TestBed.createComponent(TwoWayBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
