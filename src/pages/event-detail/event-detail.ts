import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { bookTicketModal } from '../../modals/ticket-modal/ticket-modal';


@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  selectedItem: any;
  username: string;
  authenticated: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public modalCtrl: ModalController) {
    
    this.selectedItem = navParams.get('item');
    if (window.localStorage.getItem('username') != null){
      this.username = window.localStorage.getItem('username');
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    this.enableAuthenticatedMenu();
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
  presentModal() {
    let modal = this.modalCtrl.create(bookTicketModal);
    modal.present();
  }
}

