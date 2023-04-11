import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-forloopings',
  templateUrl: './forloopings.component.html',
  styleUrls: ['./forloopings.component.css']
})
export class ForloopingsComponent {
  people: any[]=[
    {
      "name":"pankaj", "empid":"1"
    },
    {
      "name":"sumanth", "empid":"2"
    },
    {
      "name":"Nitesh", "empid":"3"
    },
    {
      "name":"Rohil", "empid":"4"
    }
  ]
  
  // isValid: boolean =true;

  isValid: boolean = true;
      ChangeData(valid: boolean) {
        this.isValid = valid;
    }

    public dropDownValue = "";
      SetDropDownValue(drpValue : any) {
        this.dropDownValue = drpValue.target.value;
    }
}


