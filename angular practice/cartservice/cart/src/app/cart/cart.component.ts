import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartdetails:CartserviceService){

  }
  cart:any[] | undefined;
  ngOnInit(): void {
    this.cart=this.cartdetails.getitem();
  }
  
}
