import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemService } from '../item.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

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
  constructor(private itemService: ItemService, private fb: FormBuilder) { }


    ngOnInit(): void {
      this.fetchData();
    }
  
    // buyItem(name) {
    //   let i = 0;
    //   this.itemList.forEach(element => {
    //     i++;
    //     if(element.itemName == name)
    //     {
    //       delete this.itemList[i];
    //     }

        

        
    //   });
    
    // }

}
