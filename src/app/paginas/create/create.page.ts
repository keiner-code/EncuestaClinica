import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { LoadingController,AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public createUsersForm: any;

  constructor(public lc: LoadingController
              , public ac: AlertController
              , public fs: FirestoreService
              , public router: Router
              , public fb: FormBuilder) {
                this.createUsersForm = fb.group({
                  usersName: ['',Validators.required],
                  secondName: ['',Validators.required],
                  ageUsers: ['',Validators.required],
                  phoneUsers: ['',Validators.required],
                  directionUsers: ['',Validators.required],
                  statusUsers: ['',Validators.required],
                  profeUsers: ['',Validators.required],
                  estractoUsers: ['',Validators.required],
                  cargoUsers: ['',Validators.required],
                  horasTrabajadas: ['',Validators.required],
                  cantidadAlimento: ['',Validators.required],
                  nivelEstudio: ['',Validators.required],
                });
               }

  ngOnInit() {
  }

  async createUsers(){
    const loading = await this.lc.create();
    const usersName = this.createUsersForm.value.usersName;
    const secondName = this.createUsersForm.value.secondName;
    const ageUsers = this.createUsersForm.value.ageUsers;
    const phoneUsers = this.createUsersForm.value.phoneUsers;
    const directionUsers = this.createUsersForm.value.directionUsers;
    const statusUsers = this.createUsersForm.value.statusUsers;
    const profeUsers = this.createUsersForm.value.profeUsers;
    const estractoUsers = this.createUsersForm.value.estractoUsers;
    const cargoUsers = this.createUsersForm.value.cargoUsers;
    const horasTrabajadas = this.createUsersForm.value.horasTrabajadas;
    const cantidadAlimento = this.createUsersForm.value.cantidadAlimento;
    const nivelEstudio = this.createUsersForm.value.nivelEstudio;
    this.fs.crearUsuarios(usersName,secondName,ageUsers,phoneUsers,directionUsers
                          , statusUsers, profeUsers, estractoUsers, cargoUsers, horasTrabajadas
                          ,cantidadAlimento, nivelEstudio).then(()=>{
                            loading.dismiss().then(() => {
                              this.router.navigateByUrl('');
                            });
                          },error=>{
                            console.log(error);
                          });
                          return await loading.present();
  }
}
