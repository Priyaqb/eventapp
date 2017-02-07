import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { signupPage } from '../signup/signup';
import {eventListPage} from '../event-list/event-list';


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class loginPage {

  log: {username: string, password: string } = {username: '', password: ''};
  logForm: FormGroup;
  submitAttempt: boolean = false;
  username: AbstractControl;


  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public menu: MenuController) {	
    this.logForm = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.username = this.logForm.controls['username']; 
    this.enableAuthenticatedMenu();
  }

  enableAuthenticatedMenu() {
    this.menu.enable(false, 'authenticated');
    this.menu.enable(true, 'unauthenticated');
  }

  loginForm(log) {
    this.submitAttempt = true;
    if(!this.logForm.valid){
        return;
    } else {
        window.localStorage.setItem('username', log.username);
        this.navCtrl.push(eventListPage, {
          item: log
        });
        this.navCtrl.setRoot(eventListPage);
    }
  }

  pushPage(){
    this.navCtrl.push(signupPage);
  }

}
