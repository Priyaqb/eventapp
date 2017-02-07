import { Component } from '@angular/core';
import { ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'ticket-modal.html'
})
export class bookTicketModal {

  constructor(private viewCtrl: ViewController) {
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}