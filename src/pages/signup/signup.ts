import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { eventListPage} from '../event-list/event-list';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class signupPage {

  
  signup: {firstName: string, lastName: string, password: string, email: string, phone: string, } = {firstName: '', lastName: '', password: '', email: '', phone: '' };
  signUpForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {	
    this.signUpForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        password: ['', Validators.compose([Validators.pattern('[a-zA-Z]*'), Validators.required])],
        email: ['', Validators.compose([Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}'), Validators.required])],
        phone: ['']
    });
  }

  signupForm(signup) {
    this.submitAttempt = true;
    if(!this.signUpForm.valid){
        return;
    } 
    console.log(signup)
    this.navCtrl.push(eventListPage, {
      item: signup
    });
    this.navCtrl.setRoot(eventListPage);
  }

}
