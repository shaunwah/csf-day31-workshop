import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() items: any[] = [];
  title: string = 'My Cart';

  removeFromCart(item: string, removeAll?: boolean) {
    let index: number = this.items.findIndex(obj => obj.name === item);
    if (this.items[index].quantity > 1 && !removeAll) {
      this.items[index].quantity--;
    } else {
      this.items.splice(index, 1);
    }
  }
}
