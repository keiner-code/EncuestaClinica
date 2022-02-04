import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pacientescriticos',
  templateUrl: './pacientescriticos.page.html',
  styleUrls: ['./pacientescriticos.page.scss'],
})
export class PacientescriticosPage implements OnInit {

  pacientesCriticos: any=[];
  constructor(private fs: FirestoreService, private router: Router, private ar: ActivatedRoute) {}

  ngOnInit() {
    this.pacientesCriticos = this.fs.obtenerListaPacientesCriticos().valueChanges();
  }

}
