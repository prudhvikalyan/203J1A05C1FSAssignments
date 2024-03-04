import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  getItems(){
    return ["item1=[name:eggs,description:1dozen]","item2=[name:milk,description:1litre]"];
  }
  constructor() { }
}
