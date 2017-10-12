import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationsCmpComponent } from './conversations-cmp.component';

describe('ConversationsCmpComponent', () => {
  let component: ConversationsCmpComponent;
  let fixture: ComponentFixture<ConversationsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
