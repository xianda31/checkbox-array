import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';



interface Article {
  label:string,
  value?:number
}
interface Field extends Article{
    selected:boolean,
}

@Component({
  selector: 'app-checkbox2',
  templateUrl: './checkbox2.component.html',
  styleUrls: ['./checkbox2.component.css']
})



export class Checkbox2Component implements OnInit {

  field : Field[]=[];
  label:string[] = ['Pepperoni','Extra Cheese', 'Mushroom']
  article:Article[] = [
        {label:'Pepperoni',value:20},
        {label:'Extra Cheese'},
        {label: 'Mushroom',value:24}]

  frmgrp !: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.frmgrp = this._fb.group({
      array: this._fb.array([]),
    });

  }

  ngOnInit(): void {

  this.article.forEach(item => (this.field.push({selected:false,label:item.label, value:(item.value==undefined ? 0: item.value )}))  );

  this.field.forEach(field => (this.addField(field)));
  }

  addField(field : Field) { this.array.push(this.newField(field)) };
   newField(field : Field): FormGroup {
        return this._fb.group({
          chkbxName : field.selected,
          inputValue: field.value })
        };


  get array(): FormArray { return this.frmgrp.get('array') as FormArray }

  onclick(i : number){this.field[i].selected =!this.field[i].selected ;}
}
