import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';
import {LoadingController,AlertController} from '@ionic/angular';
import {FirestoreService} from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-agregarencuesta',
  templateUrl: './agregarencuesta.page.html',
  styleUrls: ['./agregarencuesta.page.scss'],
})
export class AgregarencuestaPage implements OnInit {
  //estatus: any;
  public addEncuestaForm: any;

  constructor(public ar: ActivatedRoute
             , public router: Router
             , public lc: LoadingController
             , public ac: AlertController
             , public fs: FirestoreService
             , public fb: FormBuilder) {
               this.addEncuestaForm = fb.group({
                username: ['',Validators.required],
                password: ['',Validators.required],
               });
              }

  ngOnInit() {
  }

  async addEncuesta(){
    const loading = await this.lc.create();
    const username = this.addEncuestaForm.value.username;
    const password = this.addEncuestaForm.value.password;
    const estatus = this.ar.snapshot.paramMap.get('status');
    this.fs.agregarEncuesta(username,password,estatus).then(()=>{
      loading.dismiss().then(() =>{
        this.router.navigateByUrl('');
      });
    },error=>{
      console.log(error);
    });
    return await loading.present();
  }

}
