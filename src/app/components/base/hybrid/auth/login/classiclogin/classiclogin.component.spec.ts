import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassicloginComponent} from './classiclogin.component';

describe('ClassicloginComponent', () => {
  let component: ClassicloginComponent;
  let fixture: ComponentFixture<ClassicloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicloginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ClassicloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
