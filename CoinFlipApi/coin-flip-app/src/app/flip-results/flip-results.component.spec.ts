import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipResultsComponent } from './flip-results.component';

describe('FlipResultsComponent', () => {
  let component: FlipResultsComponent;
  let fixture: ComponentFixture<FlipResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
