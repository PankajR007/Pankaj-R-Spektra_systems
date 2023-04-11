import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(){

  }
  ngOnInit():void{

  }
  // Name:string="Pankaj";
  greet():void{
    // alert("Hello "+this.Name);
    alert("Form Submitted");
  }

}{

}
