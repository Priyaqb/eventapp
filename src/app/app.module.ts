import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { loginPage } from '../pages/login/login';
import { signupPage } from '../pages/signup/signup';
import { eventListPage } from '../pages/event-list/event-list';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { bookTicketModal } from '../modals/ticket-modal/ticket-modal';

@NgModule({
  declarations: [
    MyApp,
    loginPage,
    signupPage,
    EventDetailPage,
    eventListPage,
    bookTicketModal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    loginPage,
    signupPage,
    EventDetailPage,
    eventListPage,
    bookTicketModal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
