import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MicrosoftloginComponent} from './microsoftlogin.component';

describe('MicrosoftloginComponent', () => {
  let component: MicrosoftloginComponent;
  let fixture: ComponentFixture<MicrosoftloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrosoftloginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MicrosoftloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
