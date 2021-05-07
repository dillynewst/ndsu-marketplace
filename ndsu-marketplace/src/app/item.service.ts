import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // Types of items : text_books, furniture, clothes, electronics, school_materials, etc
  items = [
    {
      itemName : 'Television',
      itemType : 'electronics',
      itemDescription : '55 inch Samsung',
      itemPrice : 120.00,
      itemSeller : 'john.doe@ndsu.edu'
    },
    {
      itemName : 'Couch',
      itemType : 'furniture',
      itemDescription : 'black leather loveseat',
      itemPrice : 120.00,
      itemSeller : 'jane.doe@ndsu.edu'
    },
  ]

  addItem(itemName: string, itemType: string, itemDescription: string, itemPrice: number, itemSeller: string){
    this.items.push({itemName, itemType, itemDescription, itemPrice, itemSeller});
  }

  editItem(id: number, itemName: string, itemType: string, itemDescription: string, itemPrice: number, itemSeller: string){
    this.items[id].itemName = itemName;
    this.items[id].itemType = itemType;
    this.items[id].itemDescription = itemDescription;
    this.items[id].itemPrice = itemPrice;
    this.items[id].itemSeller = itemSeller;
  }

  removeItem(index: number){
    if(index > -1){
      this.items.splice(index, 1);
    }
  }

  getItem(index: number){
    return this.items[index];
  }
  
  constructor() { }
}
