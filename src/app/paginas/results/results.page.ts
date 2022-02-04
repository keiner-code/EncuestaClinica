import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
   estado: string;
   total: number;

  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    this.showsDates();
  }

  showsDates(){
    const valores = [];
    let sumValor = 0;
    const datos = this.ar.snapshot.paramMap.get('result');


    for(let i=0; i < datos.length; i++){
      if(datos[i] !== ','){
        if(datos[i+1] !== ','){
            valores.push(parseInt(datos[i] + datos[i+1],10));
            i=i+1;
          }else{
             valores.push(parseInt(datos[i],10));
          }
    }
  }
    valores.map(item =>{sumValor += item;});
    this.total = sumValor;
        if(sumValor < 12) {this.estado = 'Usted No Contesto Todas Las Preguntas';};
        if(sumValor >= 12 && sumValor < 24) {this.estado = 'sin sintomas';};
        if(sumValor >= 24 && sumValor < 36) {this.estado = 'sin Estres';};
        if(sumValor >= 36 && sumValor < 48) {this.estado = 'Estres Leve';};
        if(sumValor >= 48 && sumValor < 60) {this.estado = 'Estres Alto';};
        if(sumValor > 60 ) {this.estado = 'Estres Grave';};

  }
}
