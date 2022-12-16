import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbbCountComponent } from './pbb-count.component';

describe('PbbCountComponent', () => {
  let component: PbbCountComponent;
  let fixture: ComponentFixture<PbbCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbbCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbbCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
