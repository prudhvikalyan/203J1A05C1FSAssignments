import { AppComponent } from './../app.component';
import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
  
})
export class ItemsComponent {
  title="list of items";
  items;
  constructor(service:DataServiceService)
  {
    this.items=service.getItems();
  }
}
