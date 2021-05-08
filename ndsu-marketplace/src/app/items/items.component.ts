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

  ngOnInit(): void {
    this.itemList.getItems().subscribe(data => {
      this.itemList = data;
      console.log(data);
    });

  }

  addNewItem() Item
    const newItem: Items = {
      itemId: ++this.iitemId,
      itemType: this.iitemType,
      itemDescription: this.iitemDescription,
      itemPrice: this.iitemPrice,
      itemSeller: this.iitemSeller
    };
    this.items
  }


function editItem() {
  throw new Error('Function not implemented.');
}

function getItems() {
  throw new Error('Function not implemented.');
}

function removeItems() {
  throw new Error('Function not implemented.');
}

}