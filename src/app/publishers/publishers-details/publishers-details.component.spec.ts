import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersDetailsComponent } from './publishers-details.component';

describe('PublishersDetailsComponent', () => {
  let component: PublishersDetailsComponent;
  let fixture: ComponentFixture<PublishersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
