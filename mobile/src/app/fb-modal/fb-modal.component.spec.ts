import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbModalComponent } from './fb-modal.component';

describe('FbModalComponent', () => {
  let component: FbModalComponent;
  let fixture: ComponentFixture<FbModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
