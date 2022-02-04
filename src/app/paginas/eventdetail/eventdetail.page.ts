import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/services/event/event-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.page.html',
  styleUrls: ['./eventdetail.page.scss'],
})
export class EventdetailPage implements OnInit {
  public currentEvent: any=[];
  public eventId: string;
  public nombreinvitado='';

  constructor(private eS: EventServiceService, public aR: ActivatedRoute) { }

  ngOnInit() {
    const eventId: string = this.aR.snapshot.paramMap.get('id');
    this.eS.getEventDetail(eventId).then(eventSnapshot =>{
      this.currentEvent = eventSnapshot.data();
      this.currentEvent.id = eventSnapshot.id;
    });
  }
  agregarInvitado(nombreInvitado: string): void{
    this.eS.addInvitado(nombreInvitado, this.currentEvent.id, this.currentEvent.price).then(() =>
      this.nombreinvitado='');
  }


}
