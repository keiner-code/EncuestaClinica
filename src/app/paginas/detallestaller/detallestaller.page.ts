import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detallestaller',
  templateUrl: './detallestaller.page.html',
  styleUrls: ['./detallestaller.page.scss'],
})
export class DetallestallerPage implements OnInit {
   tallerid: any;
   taller: any = {};
  constructor(private fs: FirestoreService
              ,private ar: ActivatedRoute
              ,private router: Router
              ,public ac: AlertController) { }

  ngOnInit() {
    this.tallerid = this.ar.snapshot.paramMap.get('id');
    this.taller = this.fs.obtenerDetallesTaller(this.tallerid).valueChanges();
  }

}
