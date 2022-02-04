import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {LoadingController,AlertController} from '@ionic/angular';
import {FirestoreService} from 'src/app/services/data/firestore.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-taller',
  templateUrl: './create-taller.page.html',
  styleUrls: ['./create-taller.page.scss'],
})
export class CreateTallerPage implements OnInit {
  public createTallerForm: any;

  constructor(public lc: LoadingController, public ac: AlertController, public fs: FirestoreService,
    public router: Router, fb: FormBuilder) {
      this.createTallerForm = fb.group({
        tallerName: ['',Validators.required],
        horaTaller: ['',Validators.required],
        expertoTaller: ['',Validators.required],
        precioTaller: ['',Validators.required],
      });
     }

  ngOnInit() {
  }

  async createTaller(){
    const loading = await this.lc.create();
    const tallerName = this.createTallerForm.value.tallerName;
    const horaTaller = this.createTallerForm.value.horaTaller;
    const expertoTaller = this.createTallerForm.value.expertoTaller;
    const precioTaller = this.createTallerForm.value.precioTaller;
    this.fs.crearTalleres(tallerName,horaTaller,expertoTaller,precioTaller).then(()=>{
      loading.dismiss().then(()=>{
        this.router.navigateByUrl('');
      });
    },error =>{
      console.log(error);
    });
    return await loading.present();
  }

}
