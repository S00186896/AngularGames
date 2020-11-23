import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherFormsComponent } from './publisher-forms.component';

describe('PublisherFormsComponent', () => {
  let component: PublisherFormsComponent;
  let fixture: ComponentFixture<PublisherFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
