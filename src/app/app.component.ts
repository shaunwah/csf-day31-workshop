import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf-day31-workshop';
  items: any[] = [];
  addToCart(item: string) {
    let index: number = this.items.findIndex(obj => obj.name === item);
    if (index != -1) {
      this.items[index].quantity++;
    } else {
      this.items.push({ name: item, quantity: 1 });
    }
  }
}
