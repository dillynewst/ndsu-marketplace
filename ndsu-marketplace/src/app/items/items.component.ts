import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../model/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemList: Item[] = [];
  itemId : number;
    itemName : string;
    itemType : string;
    itemDescription : string;
    itemPrice : number;
    itemSeller : string;
  

  constructor(private itemService: ItemService) { }

  fetchData(){
    this.itemService.getItems().subscribe(data => {
      this.itemList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  addNewItem(){
    const newItem: Item = {
      itemId: ++this.itemId,
      itemName: this.itemName,
      itemType: this.itemType,
      itemDescription: this.itemDescription,
      itemPrice: this.itemPrice,
      itemSeller: this.itemSeller
    }
    
    this.itemService.addItem(newItem).subscribe(data => {
      console.log(data);
      this.fetchData();
    })
  }


// function editItem() {
//   throw new Error('Function not implemented.');
// }

// function getItems() {
//   throw new Error('Function not implemented.');
// }

// function removeItems() {
//   throw new Error('Function not implemented.');
// }

}