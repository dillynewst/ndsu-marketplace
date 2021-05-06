import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items = [
    {
      // test items
    }
  ]

  addItem(){
    this.items.push();
  }

  editItem(){

  }

  removeItem(){
    
  }
  constructor() { }
}
