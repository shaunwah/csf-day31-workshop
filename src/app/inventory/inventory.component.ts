import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  @Output() addedToCart: EventEmitter<string> = new EventEmitter<string>();
  title: string = 'Please Select';
  items: string[] = ['apple', 'pear', 'orange', 'mango', 'banana', 'watermelon', 'papaya'];

  addToCart(item: string) {
    this.addedToCart.emit(item);
    console.log(`${item} added to cart`);
  }
}
