import { Component, OnInit } from '@angular/core';
import {EventServiceService} from 'src/app/services/event/event-service.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss'],
})
export class ListEventPage implements OnInit {
  eventList: any=[];
  constructor(private eS: EventServiceService) { }

  ngOnInit() {
    this.eS.getEventList().then(evenListSnapshot => {
      this.eventList=[];
      evenListSnapshot.forEach(snap=> {this.eventList.push({
      id: snap.id,
      name: snap.data().name,
      price: snap.data().price,
      date: snap.data().date });
      return false;
    });
  });
  }

}
