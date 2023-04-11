import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  public message="Your order Placed";
  public myFunc() {
    alert(this.message);
  }
}
