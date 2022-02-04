import { Component, OnInit } from '@angular/core';
import { ServiceloginService } from 'src/app/services/data/servicelogin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(private fB: FormBuilder
            , private sL: ServiceloginService
            , private router: Router
            , private aC: AlertController) {
              this.buildForm();
             }

  ngOnInit() {
  }
  async singnupUsers(event: Event){
    event.preventDefault();
    if(this.registerForm.valid){
      const value = this.registerForm.value;
      this.sL.singAuth(value.email, value.password).then(()=> {this.router.navigateByUrl('login');
    }, async error => {const alert = await this.aC.create({message: error.message, buttons: [{text: 'Ok', role: 'cancel'}], });
      await alert.present();
    });
    }
  }
  buildForm(){
    this.registerForm = this.fB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]],
    });
  }
  get emailField(){ return this.registerForm.get('email');}
  get passField(){ return this.registerForm.get('password');}

}
