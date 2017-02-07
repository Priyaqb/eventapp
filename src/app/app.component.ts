import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { loginPage } from '../pages/login/login';
import { signupPage } from '../pages/signup/signup';
import { eventListPage } from '../pages/event-list/event-list';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  loggedIn: string;
  loggedInval: boolean = true;

  // make loginPage the root (or first) page
  rootPage: any = loginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();
    this.enableAuthenticatedMenu();

    // set our app's pages
    this.pages = [
      { title: 'Events', component: eventListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    this.enableAuthenticatedMenu();
  }

  enableAuthenticatedMenu() {
    this.menu.enable(false, 'authenticated');
    this.menu.enable(true, 'unauthenticated');
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logout() {
    window.localStorage.removeItem('username');
    this.nav.push(loginPage);
    this.nav.setRoot(loginPage);
  }

  login() {
    this.nav.push(loginPage);
    this.nav.setRoot(loginPage);
  }
}
