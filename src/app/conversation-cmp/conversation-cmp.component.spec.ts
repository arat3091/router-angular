import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationCmpComponent } from './conversation-cmp.component';

describe('ConversationCmpComponent', () => {
  let component: ConversationCmpComponent;
  let fixture: ComponentFixture<ConversationCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
