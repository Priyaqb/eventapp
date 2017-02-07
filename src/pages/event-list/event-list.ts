import { Component } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { EventDetailPage } from '../event-detail/event-detail';


@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html'
})
export class eventListPage {
  selectedItem: any;
  title: string[];
  desc: string[];
  addAttribute: boolean = false;
  events: Array<{title: string, desc: string, addAttribute: boolean}>;
  username: string;
  authenticated: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public alertCtrl: AlertController) {
    if (window.localStorage.getItem('username') != null){
      this.username = window.localStorage.getItem('username');
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    this.selectedItem = navParams.get('item');
    this.enableAuthenticatedMenu();
    
    this.events = [];
    this.title = ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'];
    this.desc = ['Desc 1', 'Desc 2', 'Desc 3', 'Desc 4', 'Desc 5'];
    this.addAttribute = false;
    for(let i = 1; i < 5; i++) {
      this.events.push({
        title: this.title[i],
        desc: this.desc[i],
        addAttribute: this.addAttribute
      });
    }
  }

  enableAuthenticatedMenu() {
    if(this.authenticated) {
      this.menu.enable(true, 'authenticated');
      this.menu.enable(false, 'unauthenticated');
    } else {
      this.menu.enable(false, 'authenticated');
      this.menu.enable(true, 'unauthenticated');
    }       
  }

  itemTapped(event, item) {
    this.navCtrl.push(EventDetailPage, {
      item: item
    });
  }

  markFav(item, i) {
    let confirm = this.alertCtrl.create({
      title: 'Mark as favourite?',
      message: 'Do you want to mark this event as your favourite?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            item.addAttribute = false;
          }
        },
        {
          text: 'Agree',
          handler: () => {
            item.addAttribute = true;
          }
        }
      ]
    });
    confirm.present();
  }
}
