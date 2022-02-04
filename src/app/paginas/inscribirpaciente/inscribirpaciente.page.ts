import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';
import {LoadingController,AlertController} from '@ionic/angular';
import {FirestoreService} from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-inscribirpaciente',
  templateUrl: './inscribirpaciente.page.html',
  styleUrls: ['./inscribirpaciente.page.scss'],
})
export class InscribirpacientePage implements OnInit {
  public addEncuestapacienteForm: any;

  constructor(public ar: ActivatedRoute
    , public router: Router
    , public lc: LoadingController
    , public ac: AlertController
    , public fs: FirestoreService
    , public fb: FormBuilder) {
      this.addEncuestapacienteForm = fb.group({
       username: ['',Validators.required],
       password: ['',Validators.required],
      });
     }

  ngOnInit() {
  }

  async addEncuestaPaciente(){
    const loading = await this.lc.create();
    const username = this.addEncuestapacienteForm.value.username;
    const password = this.addEncuestapacienteForm.value.password;
    const taller = this.ar.snapshot.paramMap.get('taller');

    this.fs.agregarEncuestaPaciente(username,password,taller).then(()=>{
      loading.dismiss().then(() =>{
        this.router.navigateByUrl('');
      });
    },error=>{
      console.log(error);
    });
    return await loading.present();
  }


}
