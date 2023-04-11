import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  item=[
    {prod_ID:1,prod_Name:'Shirt',prod_quantity:'1',prod_price:'299'},
    {prod_ID:1,prod_Name:'T-Shirt',prod_quantity:'1',prod_price:'599'},
    {prod_ID:1,prod_Name:'Jeans',prod_quantity:'1',prod_price:'699'}
  ]
  constructor() { }

  getitem(){
    return this.item;
    
  }
}
