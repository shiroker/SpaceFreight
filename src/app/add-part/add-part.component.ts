import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {

  private newName: string;
  private newId: string;
  private newQuantity: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAddPart(): void {
    const newPart = {
      name : this.newName,
      id : this.newId,
      quantity : this.newQuantity,
    };
    console.log(newPart.name);
  }
}
