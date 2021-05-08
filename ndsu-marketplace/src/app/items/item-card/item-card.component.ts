import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../item.service';
import { Item } from '../../model/item';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Item;
  @Input() id: number;

  itemList: Item[] = [];
  itemId : number;
  itemName : string;
  itemType : string;
  itemDescription : string;
  itemPrice : number;
  itemSeller : string;

  fetchData(){
    this.itemService.getItems().subscribe(data => {
      this.itemList = data;
      console.log(data);
    });
  }
  constructor(private itemService: ItemService) { }


    ngOnInit(): void {
      this.fetchData();
    }
  buyItem(name: string) {
    let i = 0;
    this.itemList.forEach(element => {
      i++;
      if(element.itemName == name)
      {
        delete this.itemList[i];
      }

      

      
    });
  
  }
}
