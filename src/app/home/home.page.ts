import { Component,OnInit } from '@angular/core';
import { FirestoreService } from '../services/data/firestore.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  datosTaller: any=[];
  constructor(private fs: FirestoreService, private router: Router, private ar: ActivatedRoute) {}

  ngOnInit(){
    this.datosTaller = this.fs.obtenerListaTalleres().valueChanges();
  }

}
