import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesCmpComponent } from './messages-cmp.component';

describe('MessagesCmpComponent', () => {
  let component: MessagesCmpComponent;
  let fixture: ComponentFixture<MessagesCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
