import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabletdetailsComponent} from './tabletdetails.component';

describe('TabletdetailsComponent', () => {
  let component: TabletdetailsComponent;
  let fixture: ComponentFixture<TabletdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabletdetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TabletdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
