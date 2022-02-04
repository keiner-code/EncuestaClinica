import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event/event-service.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
  eventName: string;
  eventDate: string;
  eventPrice: number;
  eventCost: number;
  constructor(private router: Router, private eS: EventServiceService) { }

  ngOnInit() {
  }
  eventCreate(eventName: string, eventDate: string, eventPrice: number, eventCost: number): void{
    if(eventName === undefined || eventDate === undefined || eventPrice === undefined || eventCost === undefined){
      return;
    }
    this.eS.createEvent(eventName, eventDate, eventPrice, eventCost).then(() => {
      this.router.navigateByUrl('/list-event');
    });
  }

}
