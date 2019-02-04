import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GihHubDetailsComponent } from './gih-hub-details.component';

describe('GihHubDetailsComponent', () => {
  let component: GihHubDetailsComponent;
  let fixture: ComponentFixture<GihHubDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GihHubDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GihHubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
