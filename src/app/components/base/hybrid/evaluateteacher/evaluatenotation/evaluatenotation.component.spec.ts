import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EvaluatenotationComponent} from './evaluatenotation.component';

describe('EvaluatenotationComponent', () => {
  let component: EvaluatenotationComponent;
  let fixture: ComponentFixture<EvaluatenotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluatenotationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EvaluatenotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
