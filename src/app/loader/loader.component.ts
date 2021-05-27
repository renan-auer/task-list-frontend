import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from "../services/event-emitter";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  visivel: boolean = false;

  constructor(EventService: EventEmitterService) {
    EventService.get('loader').subscribe((data : any) => this.visivel = data);
  }

  ngOnInit() { }
}