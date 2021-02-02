import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShareComponent } from './screen-share.component';

describe('ScreenShareComponent', () => {
  let component: ScreenShareComponent;
  let fixture: ComponentFixture<ScreenShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
