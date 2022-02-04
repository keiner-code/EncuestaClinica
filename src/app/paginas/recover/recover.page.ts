import { Component, OnInit } from '@angular/core';
import { ServiceloginService } from 'src/app/services/data/servicelogin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
   recoverForm: FormGroup;
  constructor(private fB: FormBuilder
        , private aS: ServiceloginService
        , private router: Router
        , private aC: AlertController) {
          this.buildForm();
        }

  ngOnInit() {
  }
  async resetPassw(event: Event){
    event.preventDefault();
    if(this.recoverForm.valid){
      const value = this.recoverForm.value;
      this.aS.resetPassword(value.email).then( async ()=> {
        const alert = await this.aC.create({message: 'Revisa el correo que te enviamos a tu Cuenta'
        ,buttons: [{text:'Ok',role:'cancel', handler: () => {this.router.navigateByUrl('login'); }}],});
        await alert.present(); }, async error =>{ const erroralert = await this.aC.create({
        message: error.message, buttons: [{text:'Ok',role:'cancel'}], });
      await erroralert.present();
    });
    }
  }
  private buildForm(){
    this.recoverForm = this.fB.group({
      email: ['',[Validators.required, Validators.email]],
    });
  }
  get emailField(){return this.recoverForm.get('email');}

}
