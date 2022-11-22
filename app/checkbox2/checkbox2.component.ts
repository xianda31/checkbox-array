import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,FormArray} from '@angular/forms';



@Component({
  selector: 'app-checkbox2',
  templateUrl: './checkbox2.component.html',
  styleUrls: ['./checkbox2.component.css']
})
export class Checkbox2Component implements OnInit {

  label : string[] = ['pepperoni','extracheese','mushroom'];


  toppings = new FormGroup({
    array: new FormArray([
    new FormControl(true),
    new FormControl(false),
    new FormControl(true),
  ])
});

//  toppings = new FormGroup({
//    pepperoni: new FormControl(true),
//    extracheese: new FormControl(true),
//    mushroom: new FormControl(true),
//  });

//toppings = this._formBuilder.group({
//  pepperoni: true,
//  extracheese: false,
//  mushroom: false,
//});

constructor(private _formBuilder: FormBuilder) {}

   ngOnInit(): void {
  }

getArray() : FormArray {
  return this.toppings.get('array') as FormArray
  }
}
