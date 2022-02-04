import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
})
export class EncuestaPage implements OnInit {
  answerOne: string;
  answerTwo: string;
  answerThree: string;
  answerFour: string;
  answerFive: string;
  answerSix: string;
  answerSeven: string;
  answerEight: string;
  answerNine: string;
  answerTen: string;
  answerEleven: string;
  answerTwelve: string;
  aucome: Array<any>;

  constructor(private navctl: NavController,private alert: AlertController) { }

  ngOnInit() {
  }

  async valueAnswer(){
    let outcome1 = 0;
    let outcome2 = 0;
    let outcome3 = 0;
    let outcome4 = 0;
    let outcome5 = 0;
    let outcome6 = 0;

    const answer = [this.answerOne,this.answerTwo,this.answerThree,this.answerFour,
                    this.answerFive,this.answerSix,this.answerSeven,this.answerEight,
                    this.answerNine,this.answerTen,this.answerEleven,this.answerTwelve];


      answer.map(item =>{
          if(item === '1'){ outcome1 +=1;};
          if(item === '2'){ outcome2 +=2;};
          if(item === '3'){ outcome3 +=3;};
          if(item === '4'){ outcome4 +=4;};
          if(item === '5'){ outcome5 +=5;};
          if(item === '6'){ outcome6 +=6;};

      });

   this.aucome = [outcome1,outcome2,outcome3,outcome4,outcome5,outcome6,','];
   this.presentAlertConfirm();

  }
  async presentAlertConfirm() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar Envio!',
      message: 'Realmente Desea Finalizar La Encuesta',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah',blah);
          }
        }, {
          text: 'Si',
          handler: () => {
            this.navctl.navigateForward('/results/'+this.aucome);
          }
        }
      ]
    });
    await alert.present();
  }

}
