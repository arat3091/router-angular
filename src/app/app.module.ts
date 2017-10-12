import { ConversationCmpComponent } from './conversation-cmp/conversation-cmp.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConversationsCmpComponent } from './conversations-cmp/conversations-cmp.component';
import { MessagesCmpComponent } from './conversation-cmp/messages-cmp/messages-cmp.component';
import { MessageCmpComponent } from './conversation-cmp/message-cmp/message-cmp.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inbox' },
  {
    path: ':folder',
    children: [
      {
        path: '',
        component: ConversationsCmpComponent,
      },
      {
        path: ':id',
        component: ConversationCmpComponent,
        children: [
          {
            path: '',
            component: MessagesCmpComponent,
          },
          {
            path: 'messages/:id',
            component: MessageCmpComponent,
          }
        ]
      }
    ]
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ConversationsCmpComponent,
    ConversationCmpComponent,
    MessagesCmpComponent,
    MessageCmpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
