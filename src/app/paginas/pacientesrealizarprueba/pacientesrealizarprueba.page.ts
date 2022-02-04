import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-pacientesrealizarprueba',
  templateUrl: './pacientesrealizarprueba.page.html',
  styleUrls: ['./pacientesrealizarprueba.page.scss'],
})
export class PacientesrealizarpruebaPage implements OnInit {
 results: Observable<any>;
  constructor(private fire: FirestoreService) {
    this.results = this.fire.obtenerApiPaciente();
  }

  ngOnInit() {
  }

}
