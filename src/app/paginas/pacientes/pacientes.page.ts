import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {

  datosTallerpaciente: any=[];
  constructor(private fs: FirestoreService, private router: Router, private ar: ActivatedRoute) {}

  ngOnInit() {
    this.datosTallerpaciente = this.fs.obtenerListaTalleresPacientes().valueChanges();
  }

}
