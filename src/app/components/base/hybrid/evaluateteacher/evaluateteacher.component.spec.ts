import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EvaluateteacherComponent} from './evaluateteacher.component';

describe('EvaluateteacherComponent', () => {
  let component: EvaluateteacherComponent;
  let fixture: ComponentFixture<EvaluateteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluateteacherComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EvaluateteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
