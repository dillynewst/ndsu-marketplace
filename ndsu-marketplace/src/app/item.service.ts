import { Injectable } from '@angular/core';
import { Item } from '../app/model/item';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // Types of items : text_books, furniture, clothes, electronics, school_materials, etc
  /*Iitems: Array<Item> = [  
  {
    itemId : 1,
    itemName : 'Television',
    itemType : 'electronics',
    itemDescription : '55 inch Samsung',
    itemPrice : 120.00,
    itemSeller : 'john.doe@ndsu.edu'
  },
  {
    itemId : 2,
    itemName : 'Couch',
    itemType : 'furniture',
    itemDescription : 'black leather loveseat',
    itemPrice : 120.00,
    itemSeller : 'jane.doe@ndsu.edu'
  } ]*/




  addItem(newItem: Item){
    return this.http.post('https://ndsu-marketplace-default-rtdb.firebaseio.com/' + 'student.json', newItem);
  }

  // editItem(updateItem: Item, id: number){
  //   this.items[id] = updateItem;
  // }

  // removeItem(index: number){
  //   if(index > -1){
  //     this.items.splice(index, 1);
  //   }
  // }

  getItems(){
    return this.http.get<Item[]>('https://ndsu-marketplace-default-rtdb.firebaseio.com/' + 'student.json')
    .pipe(map(responseData => {
      const itemArray : Item[] = [];
      for (const key in responseData){
          itemArray.push(responseData[key]);
      }
      return itemArray;
    })
    );
  }

  clearData(){
    return this.http.delete('https://ndsu-marketplace-default-rtdb.firebaseio.com/' + 'student.json');
  }

  constructor(private http: HttpClient) { }
}
