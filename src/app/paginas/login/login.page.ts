import { Component, OnInit } from '@angular/core';
import { ServiceloginService } from 'src/app/services/data/servicelogin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private fB: FormBuilder
            , private sL: ServiceloginService
            , private router: Router
            , private aC: AlertController) {
              this.builForm();
            }

  ngOnInit() {
  }
  async loginUser(event: Event){
    event.preventDefault();
    if(this.loginForm.valid){
      const value = this.loginForm.value;
      this.sL.loginUsers(value.email, value.password).then(()=> { this.router.navigateByUrl('home');
    }, async error =>{ const alert = await this.aC.create({message: error.message, buttons: [{text:'Ok',role:'cancel'}], });
    await alert.present();
  });
  }
  }
  private builForm(){
    this.loginForm = this.fB.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength]],
    });
  }
  get emailField(){return this.loginForm.get('email');}
  get passField(){return this.loginForm.get('password');}

}
