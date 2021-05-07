import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../model/item';
import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  // nameInput: string;
  // descriptionInput: string;
  // priceInput: number;
  // sellerInput: string;
  newItem: Item;
  
  constructor(private itemService: ItemService, private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  itemForm = this.fb.group({
    itemName: ['', Validators.required],
    itemDescription: ['', Validators.required],
    itemPrice: ['', Validators.required],
    itemSeller: ['', Validators.required]
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.itemForm.value);
    this.newItem = this.itemForm.value;
    this.itemService.addItem(this.newItem);
    console.log("Contact added successfully");
  }

  // addNew(nameInput: string, descriptionInput: string, priceInput: number, sellerInput: string){
  //   this.newItem.itemName = nameInput;
  //   this.newItem.itemDescription = descriptionInput;
  //   this.newItem.itemPrice = priceInput;
  //   this.newItem.itemSeller = sellerInput;
  //   this.itemService.addItem(this.newItem);
  // }
}
