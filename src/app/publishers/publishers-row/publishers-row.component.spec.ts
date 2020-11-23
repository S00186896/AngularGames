import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersRowComponent } from './publishers-row.component';

describe('PublishersRowComponent', () => {
  let component: PublishersRowComponent;
  let fixture: ComponentFixture<PublishersRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishersRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
